import React, { Component } from 'react';
import { IconButton, Toolbar } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, Delete } from '@material-ui/icons';

class SignInPlaylist extends Component {

  handleSignMoveClick = event => {
    const { playlistId, arrayPosition } = this.props;
    const direction = event.currentTarget.name;
    if (direction === 'up') {
      this.props.onSignMoveClick({
        playlistId,
        arrayPosition,
        newArrayPosition: arrayPosition - 1,
      });
    }
    else if (direction === 'down') {
      this.props.onSignMoveClick({
        playlistId,
        arrayPosition,
        newArrayPosition: arrayPosition + 1,
      });
    }
  };

  handleSignRemoveClick = event => {
    const { playlistId, arrayPosition } = this.props;
    this.props.onSignRemoveClick({ playlistId, arrayPosition });
  };

  render() {
    const { sign={}, arrayPosition, arrayLength } = this.props;

    return (
      <li>
        <Toolbar>
          <IconButton
            name="up"
            title="Move up"
            disabled={arrayPosition === 0}
            onClick={this.handleSignMoveClick}
          >
            <ArrowUpward />
          </IconButton>
          <IconButton
            name="down"
            title="Move down"
            disabled={arrayPosition === arrayLength - 1}
            onClick={this.handleSignMoveClick}
          >
            <ArrowDownward />
          </IconButton>
          <IconButton title="Remove" onClick={this.handleSignRemoveClick}>
            <Delete />
          </IconButton>
          <div>
            {sign.title}
          </div>
        </Toolbar>
      </li>
    );
  };
};

export default SignInPlaylist;
