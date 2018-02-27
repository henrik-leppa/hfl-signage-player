import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar as MaterialUiAppBar, Button, Toolbar } from 'material-ui';
import { PictureInPicture, List, Home, Attachment } from 'material-ui-icons';

import { globalStylesClassnames } from './globalStyles';

class AppBar extends React.Component {

  render() {
    return (
      <MaterialUiAppBar>
        <h1 className={globalStylesClassnames.hiddenInVisualMedia}>
          HFL Signage Player: Management UI
        </h1>
        <Toolbar>
          <h2 className={globalStylesClassnames.hiddenInVisualMedia}>
            Navigation
          </h2>
          <Button component={Link} to="/" size="small" color="inherit">
            <Home />
            Home
          </Button>
          <Button component={Link} to="/files" size="small" color="inherit">
            <Attachment />
            Files
          </Button>
          <Button component={Link} to="/playlists" size="small" color="inherit">
            <List />
            Playlists
          </Button>
          <Button component={Link} to="/signs" size="small" color="inherit">
            <PictureInPicture />
            Signs
          </Button>
        </Toolbar>
      </MaterialUiAppBar>
    );
  }
};

export default AppBar;
