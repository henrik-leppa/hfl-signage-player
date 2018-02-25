import React, { Component } from 'react';
import { withStyles } from 'material-ui';

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
        <h1>
          React Digital Signage Player Management UI
        </h1>
        <p>
          Welcome!
        </p>
        <p>
          This is the management UI for React Digital Signage Player.
        </p>
        <p>
          Here you can create HTML signs that show products and such, upload
          files (like images and videos) that you can attach to those signs, and
          create playlist &ndash; collections of signs that are show in
          sequence.
        </p>
      </main>
    );
  }
}

const HomeStyled = withStyles(styles)(Home);

export default HomeStyled;
