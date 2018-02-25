import React, { Component } from 'react';
import {
  Button,
  ExpansionPanelDetails,
  ExpansionPanel,
  ExpansionPanelSummary,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui';
import { ExpandMore } from 'material-ui-icons';
import SignInPlaylist from '../containers/SignInPlaylist';

const styles = theme => ({
  expansionPanelDetails: {
    flexDirection: 'column',
  },
});

class Playlist extends Component {

  handleChange = prop => event => {
    this.props.onChange({
      id: this.props.id,
      [prop]: event.target.value,
    });
  };

  handleSignSelectChange = event => {
    this.props.onSignSelectChange({
      playlistId: this.props.id,
      signId: event.target.value,
    });
  };

  handleDeleteClick = event => {
    this.props.onDeleteClick(this.props.id);
  };

  render() {
    const { classes, id, signIds, allSigns, title } = this.props;

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
          <ol>
            {signIds.map((signId, arrayPosition, array) => (
              <SignInPlaylist
                key={`${arrayPosition}-${signId}`}
                signId={signId}
                playlistId={id}
                arrayPosition={arrayPosition}
                arrayLength={array.length}
              />
            ))}
          </ol>
          <Toolbar>
            <FormControl fullWidth>
              <InputLabel htmlFor="sign-select">Add sign</InputLabel>
              <Select
                native
                value="" // Makes sure that the value is reset after change
                onChange={this.handleSignSelectChange}
                inputProps={{
                  id: 'sign-select',
                }}
              >
                <option value="" />
                {allSigns.map(sign => (
                  <option key={sign.id} value={sign.id}>{sign.title}</option>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
          <Toolbar>
            <Button
              variant="raised"
              color="secondary"
              onClick={this.handleDeleteClick}
            >
              Delete playlist
            </Button>
          </Toolbar>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const PlaylistStyled = withStyles(styles)(Playlist);

export default PlaylistStyled;
