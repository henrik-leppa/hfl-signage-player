import React, { Component } from 'react';
import { Button, withStyles } from 'material-ui';
import Playlist from '../containers/Playlist';

const styles = theme => ({
  heading: {
    textAlign: 'center',
  },
  buttonParagraph: {
    textAlign: 'center',
  },
});

class Playlists extends Component {

  handleNewPlaylistClick = event => {
    this.props.onNewPlaylistClick();
  };

  render() {
    const { classes, playlists } = this.props;

    const playlistComponents = playlists.map(playlist => (
      <Playlist key={playlist.id} {...playlist} />
    ));

    return (
      <main>
        <h1 className={classes.heading}>
          Playlists
        </h1>
        <p className={classes.buttonParagraph}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleNewPlaylistClick}
          >
            Create new playlist
          </Button>
        </p>
        {playlistComponents}
      </main>
    );
  };
};

const PlaylistsStyled = withStyles(styles)(Playlists);

export default PlaylistsStyled;
