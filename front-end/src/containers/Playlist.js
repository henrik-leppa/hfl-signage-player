import { connect } from 'react-redux';
import { default as PlaylistComponent } from '../components/Playlist';

const mapStateToProps = (state, ownProps) => {
  return {
    allSigns: state.signs,
    allPlaylists: state.playlists,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Playlist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistComponent);

export default Playlist;
