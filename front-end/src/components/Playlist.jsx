import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {

  static defaultDelayMilliseconds = 7000;

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
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
        setTimeout(this.transition, Playlist.defaultDelayMilliseconds);
      }
    }
  };

  transition = () => {
    this.setState({
      ...this.state,
      currentPosition: this.nextPosition,
    });
    setTimeout(this.transition, Playlist.defaultDelayMilliseconds);
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

  render() {
    const { playlistSigns, currentPosition } = this.state;

    if (playlistSigns) {
      return (
        <div className="playlist">
          <div
            className="sign"
            dangerouslySetInnerHTML={{
              __html: playlistSigns[currentPosition].html
            }}
          />
        </div>
      );
    }
    else {
      return (
        <p>
          <strong>Error!</strong> Check console for details.
        </p>
      );
    }
  };
};

export default Playlist;
