import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {

  static signDurationMilliseconds = 7000;
  static transitionDurationMilliseconds = 1000;
  static transitionframes = 10;

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      currentSignOpacityAndVolumePercent: 100,
    };
  };

  collectPlaylistSigns = (nextProps) => {
    if (!this.state.playlistSigns) {
      const props = nextProps || this.props;

      const { allSigns, allPlaylists, match } = props;

      const playlist = allPlaylists.find(
        playlist => playlist.id === match.params.id
      );

      let playlistSigns;
      if (playlist && 1 < allSigns.length) {
        playlistSigns = playlist.signIds.map(
          signId => allSigns.find(sign => sign.id === signId)
        );
      }

      if (playlistSigns) {
        this.setState({
          ...this.state,
          playlistSigns,
        });
        // Defer `setSignTimeout` so that `ref` functions can fire.
        setTimeout(this.setSignTimeout);
      }
    }
  };

  transition = () => {
    if (0 < this.state.currentSignOpacityAndVolumePercent) {
      // Fade the current sign a little and wait a while
      this.setState({
        ...this.state,
        currentSignOpacityAndVolumePercent: (
          this.state.currentSignOpacityAndVolumePercent
          - 100 / Playlist.transitionframes
        ),
      });
      this.setVolumes();
      setTimeout(this.transition, (
        Playlist.transitionDurationMilliseconds / Playlist.transitionframes
      ));
    }
    else {
      // Old sign is invisible, remove it and wait a long time
      this.setState({
        ...this.state,
        currentPosition: this.nextPosition,
        currentSignOpacityAndVolumePercent: 100,
      });
      this.setVolumes();
      this.setSignTimeout();
    }
  }

  setSignTimeout = () => {
    if (this.currentVideoElement) {
      const { duration } = this.currentVideoElement;
      if (Number.isFinite(duration)) {
        setTimeout(
          this.transition,
          duration * 1000 - Playlist.signDurationMilliseconds,
        );
      }
      else {
        this.currentVideoElement.addEventListener('ended', this.transition);
      }
    }
    else {
      setTimeout(this.transition, Playlist.signDurationMilliseconds);
    }
  }

  setVolumes = () => {
      if (this.currentVideoElement) {
        this.currentVideoElement.volume = (
          this.state.currentSignOpacityAndVolumePercent / 100
        )
      }
      if (this.nextVideoElement) {
        this.nextVideoElement.volume = (
          this.nextSignOpacityAndVolumePercent / 100
        )
      }
  }

  currentSignElementAloneRef = (currentSignElement) => {
    if (currentSignElement) {
      this.currentVideoElement = currentSignElement.querySelector('video');
    }
    this.nextSignElement = null;
  }

  currentSignElementWithNextRef = (currentSignElement) => {
    if (currentSignElement) {
      this.currentVideoElement = currentSignElement.querySelector('video');
    }
  }

  nextSignElementRef = (nextSignElement) => {
    if (nextSignElement) {
      this.nextVideoElement = nextSignElement.querySelector('video');
    }
  }

  componentDidMount() {
    this.collectPlaylistSigns();
  };

  componentWillReceiveProps(nextProps) {
    this.collectPlaylistSigns(nextProps);
  };

  get nextPosition() {
    let next = this.state.currentPosition + 1;
    if (next === this.state.playlistSigns.length) {
      next = 0;
    }
    return next;
  };

  get nextSignOpacityAndVolumePercent() {
    return 100 - this.state.currentSignOpacityAndVolumePercent;
  };

  render() {
    const { playlistSigns, currentPosition } = this.state;

    if (playlistSigns) {
      if (this.state.currentSignOpacityAndVolumePercent === 100) {
        return (
          <div className="playlist">
            <div
              className="sign"
              ref={this.currentSignElementAloneRef}
              dangerouslySetInnerHTML={{
                __html: playlistSigns[currentPosition].html
              }}
            />
          </div>
        );
      }
      else {
        return (
          <div className="playlist">
            <div
              className="sign"
              ref={this.currentSignElementWithNextRef}
              style={{
                opacity: this.state.currentSignOpacityAndVolumePercent / 100,
              }}
              dangerouslySetInnerHTML={{
                __html: playlistSigns[currentPosition].html
              }}
            />
            <div
              className="sign"
              ref={this.nextSignElementRef}
              style={{
                opacity: this.nextSignOpacityAndVolumePercent / 100,
              }}
              dangerouslySetInnerHTML={{
                __html: playlistSigns[this.nextPosition].html
              }}
            />
          </div>
        );
      }
    }
    else {
      return (
        <p>
          <strong>Error!</strong> Check that the playlist has at least one sign
          and check the console for errors.
        </p>
      );
    }
  };
};

export default Playlist;
