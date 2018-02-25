import { connect } from 'react-redux';
import { default as PlaylistComponent } from '../components/Playlist';
import {
  addSignToPlaylist,
  deletePlaylist,
  updatePlaylist,
} from '../actions/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    allSigns: state.signs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: props => {
      dispatch(updatePlaylist(props));
    },
    onDeleteClick: id => {
      dispatch(deletePlaylist(id));
    },
    onSignSelectChange: props => {
      dispatch(addSignToPlaylist(props));
    },
  };
};

const Playlist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistComponent);

export default Playlist;
