import React, { Component } from 'react';
import {
  Button,
  ExpansionPanelDetails,
  ExpansionPanel,
  ExpansionPanelSummary,
  TextField,
  Typography,
  withStyles,
} from 'material-ui';
import { ExpandMore } from 'material-ui-icons';

const styles = theme => ({
  expansionPanelDetails: {
    flexWrap: 'wrap',
  },
  htmlTextField: {
    fontFamily: 'monospace',
  },
});

class Sign extends Component {

  handleChange = prop => event => {
    this.props.onChange({
      id: this.props.id,
      [prop]: event.target.value
    });
  };

  handleDeleteClick = event => {
    this.props.onDeleteClick(this.props.id);
  };

  render() {
    const { classes, html, title } = this.props;

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography>
            {title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
          />
          <TextField
            InputProps={{ className: classes.htmlTextField }}
            fullWidth
            label="HTML"
            multiline
            rows={20}
            value={html}
            onChange={this.handleChange('html')}
          />
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleDeleteClick}
          >
            Delete
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const SignStyled = withStyles(styles)(Sign);

export default SignStyled;
