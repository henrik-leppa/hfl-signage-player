import { connect } from 'react-redux';
import { default as PlaylistsComponent } from '../components/Playlists';
import { createNewPlaylist } from '../actions/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewPlaylistClick: () => {
      dispatch(createNewPlaylist());
    },
  };
};

const Playlists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsComponent);

export default Playlists;
