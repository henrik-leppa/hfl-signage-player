import React, { Component } from 'react';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Sign from '../containers/Sign';

const styles = theme => ({
  heading: {
    textAlign: 'center',
  },
  noteParagraph: {
    textAlign: 'center',
  },
  buttonParagraph: {
    textAlign: 'center',
  },
});

class Signs extends Component {

  handleNewSignClick = event => {
    this.props.onNewSignClick();
  };

  render() {
    const { classes, signs } = this.props;

    const signComponents = signs.map(sign => (
      <Sign key={sign.id} {...sign} />
    ));

    return (
      <main>
        <h1 className={classes.heading}>
          Signs
        </h1>
        <p className={classes.noteParagraph}>
          <strong>Note:</strong> Avoid using the same class name for different
          styles because it might lead to style collisions.
        </p>
        <p className={classes.noteParagraph}>
          <strong>Note:</strong> To create a full-page image or video sign, you
          must first upload the image or video file in &ldquo;Files&rdquo; and
          then create a sign for it.
        </p>
        <p className={classes.buttonParagraph}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleNewSignClick}
          >
            Create new sign
          </Button>
        </p>
        {signComponents}
      </main>
    );
  };
};

const SignsStyled = withStyles(styles)(Signs);

export default SignsStyled;
