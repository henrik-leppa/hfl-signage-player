import { connect } from 'react-redux';
import { default as PlaylistsComponent } from '../components/Playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Playlists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsComponent);

export default Playlists;
