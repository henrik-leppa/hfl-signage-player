import React, { Component } from 'react';
import { IconButton, Toolbar } from 'material-ui';
import { ArrowDownward, ArrowUpward, Delete } from 'material-ui-icons';

class SignInPlaylist extends Component {

  handleSignMoveClick = direction => event => {
    const { playlistId, arrayPosition } = this.props;
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
    const { allSigns, arrayPosition, arrayLength, signId } = this.props;
    let signTitle = '';
    const sign = allSigns.find(sign => sign.id === signId);
    if (sign) {
      signTitle = sign.title;
    }

    return (
      <li>
        <Toolbar>
        <IconButton
          title="Move up"
          disabled={arrayPosition === 0}
          onClick={this.handleSignMoveClick('up')}
        >
          <ArrowUpward />
        </IconButton>
        <IconButton
          title="Move down"
          disabled={arrayPosition === arrayLength - 1}
          onClick={this.handleSignMoveClick('down')}
        >
          <ArrowDownward />
        </IconButton>
        <IconButton title="Remove" onClick={this.handleSignRemoveClick}>
          <Delete />
        </IconButton>
        <div>
          {signTitle}
        </div>
        </Toolbar>
      </li>
    );
  };
};

export default SignInPlaylist;
