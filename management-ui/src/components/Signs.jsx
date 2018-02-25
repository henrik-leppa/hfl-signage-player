import React, { Component } from 'react';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Sign from '../containers/Sign';

const styles = theme => ({
  heading: {
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

    const signsComponents = signs.map(sign => (
      <Sign key={sign.id} {...sign} />
    ));

    return (
      <main>
        <h1 className={classes.heading}>
          Signs
        </h1>
        <p className={classes.buttonParagraph}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleNewSignClick}
          >
            New sign
          </Button>
        </p>
        {signsComponents}
      </main>
    );
  };
};

const SignsStyled = withStyles(styles)(Signs);

export default SignsStyled;
