import React, { Component } from 'react';
import { withStyles } from 'material-ui';

const styles = theme => ({
  heading: {
    textAlign: 'center',
  },
});

class PageNotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main>
        <h1 className={classes.heading}>
          Page not found
        </h1>
      </main>
    );
  }
}

const PageNotFoundStyled = withStyles(styles)(PageNotFound);

export default PageNotFoundStyled;
