import { connect } from 'react-redux';
import { default as PlaylistListComponent } from '../components/PlaylistList';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const PlaylistList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistListComponent);

export default PlaylistList;
