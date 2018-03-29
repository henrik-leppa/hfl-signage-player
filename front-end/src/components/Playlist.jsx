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

  transition = () => {
    if (0 < this.state.currentSignOpacityAndVolumePercent) {
      const {
        transitionframes, transitionDurationMilliseconds
      } = this.constructor;
      // Fade the current sign a little and wait a while
      this.setState({
        currentSignOpacityAndVolumePercent: (
          this.state.currentSignOpacityAndVolumePercent - 100 / transitionframes
        ),
      });
      this.setVolumes();
      setTimeout(this.transition, (
        transitionDurationMilliseconds / transitionframes
      ));
    }
    else {
      // Old sign is invisible, remove it and wait a long time
      this.setState({
        currentPosition: this.nextPosition,
        currentSignOpacityAndVolumePercent: 100,
      });
      this.setVolumes();
      this.setSignTimeout();
    }
  }

  start = props => {
    if (props.signs && !this.animationStarted) {
      // Defer `setSignTimeout` so that `ref` functions can fire.
      setTimeout(this.setSignTimeout);
      this.animationStarted = true;
    }
  }

  setSignTimeout = () => {
    if (this.currentVideoElement) {
      const { duration } = this.currentVideoElement;
      if (Number.isFinite(duration)) {
        setTimeout(
          this.transition,
          duration * 1000 - this.constructor.signDurationMilliseconds,
        );
      }
      else {
        console.log(
          'Videos\'s length could not be determined.' + '\n'
          + 'It will play to its end, but it will not fade out.' + '\n\n'
          + 'Video: ', this.currentVideoElement
        );
        this.currentVideoElement.addEventListener('ended', this.transition);
      }
    }
    else {
      setTimeout(this.transition, this.constructor.signDurationMilliseconds);
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

  currentSignElementAloneRef = currentSignElement => {
    if (currentSignElement) {
      this.currentVideoElement = currentSignElement.querySelector('video');
    }
    this.nextSignElement = null;
  }

  currentSignElementWithNextRef = currentSignElement => {
    if (currentSignElement) {
      this.currentVideoElement = currentSignElement.querySelector('video');
    }
  }

  nextSignElementRef = nextSignElement => {
    if (nextSignElement) {
      this.nextVideoElement = nextSignElement.querySelector('video');
    }
  }

  componentDidMount() {
    this.start(this.props);
  };

  componentWillReceiveProps(nextProps) {
    this.start(nextProps);
  };

  get nextPosition() {
    let next = this.state.currentPosition + 1;
    if (next === this.props.signs.length) {
      next = 0;
    }
    return next;
  };

  get nextSignOpacityAndVolumePercent() {
    return 100 - this.state.currentSignOpacityAndVolumePercent;
  };

  render() {
    const { signs } = this.props;
    const { currentPosition } = this.state;

    if (signs) {
      if (this.state.currentSignOpacityAndVolumePercent === 100) {
        return (
          <div className="playlist">
            <div
              className="sign"
              ref={this.currentSignElementAloneRef}
              dangerouslySetInnerHTML={{
                __html: signs[currentPosition].html
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
                __html: signs[currentPosition].html
              }}
            />
            <div
              className="sign"
              ref={this.nextSignElementRef}
              style={{
                opacity: this.nextSignOpacityAndVolumePercent / 100,
              }}
              dangerouslySetInnerHTML={{
                __html: signs[this.nextPosition].html
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
