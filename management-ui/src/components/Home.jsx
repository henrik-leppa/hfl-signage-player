import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';

const styles = theme => ({
  mainContent: {
    margin: 'auto',
    maxWidth: '500px',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.mainContent}>
        <header>
          <h1>
            HFL Signage Player: Management UI 0.3.0
          </h1>
          <p>
            <small>
              Copyright © 2018&ndash;2019 Henrik Franciscus Leppä
            </small>
          </p>
          <p>
            <small>
              This is free software. You may redistribute copies of it under the
              terms of the
              {' '}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <abbr title="Opens in a new tab/window">
                  <OpenInNew fontSize="inherit" />
                </abbr>
                MIT License
              </a>
              . There is NO WARRANTY, to the extent permitted by law.
            </small>
          </p>
        </header>
        <p>
          Welcome!
        </p>
        <p>
          This is the management UI for HFL Signage Player.
        </p>
        <p>
          With this web app you can create HTML signs that show products and
          such, upload files (like images and videos) that you can attach to
          those signs, and create playlists &ndash; collections of signs that are
          shown in sequence.
        </p>
        <p>
          <strong>Note:</strong> All the work you do is autosaved. Your changes
          only show up in Front-end once you refresh the page in it. Autosaving
          cannot be turned off in this version.
        </p>
      </main>
    );
  }
}

const HomeStyled = withStyles(styles)(Home);

export default HomeStyled;
