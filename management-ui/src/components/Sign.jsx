import React, { Component } from 'react';
import {
  Button,
  ExpansionPanelDetails,
  ExpansionPanel,
  ExpansionPanelSummary,
  TextField,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui';
import { ExpandMore } from 'material-ui-icons';

const uploadDirectory = process.env.REACT_APP_BACK_END_URL + 'uploads';

const styles = theme => ({
  expansionPanelDetails: {
    flexWrap: 'wrap',
  },
  toolbar: {
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

  handleInlineStylesheetClick = event => {
    this.props.onChange({
      id: this.props.id,
      html: this.props.html + '\n<style>\n\n</style>',
    });
  };

  handleLinkToStylesheetClick = event => {
    this.props.onChange({
      id: this.props.id,
      html: (
        this.props.html + '\n<link rel="stylesheet" href="' + uploadDirectory
        + '/some-stylesheet.css">'
      ),
    });
  };

  handleFullPageImageClick = event => {
    this.props.onChange({
      id: this.props.id,
      html: (
        this.props.html + '\n<img class="full-page-image" src="'
        + uploadDirectory + '/some-image.png">'
      ),
    });
  };

  handleFullPageAutoplayingVideoClick = event => {
    this.props.onChange({
      id: this.props.id,
      html: (
        this.props.html + '\n<video class="full-page-video" autoplay src="'
        + uploadDirectory + '/some-video.webm"></video>'
      ),
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
          <Toolbar className={classes.toolbar}>
            <Button onClick={this.handleFullPageAutoplayingVideoClick}>
              Full-page autoplaying video
            </Button>
            <Button onClick={this.handleFullPageImageClick}>
              Full-page image
            </Button>
            <Button onClick={this.handleInlineStylesheetClick}>
              Inline stylesheet
            </Button>
            <Button onClick={this.handleLinkToStylesheetClick}>
              Link to stylesheet
            </Button>
          </Toolbar>
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
            color="secondary"
            onClick={this.handleDeleteClick}
          >
            Delete sign
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const SignStyled = withStyles(styles)(Sign);

export default SignStyled;
