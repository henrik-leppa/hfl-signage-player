import { connect } from 'react-redux';
import { default as PlaylistComponent } from '../components/Playlist';

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  const allSigns = state.signs;
  const allPlaylists = state.playlists;
  const playlist = allPlaylists.find(
    playlist => playlist.id === match.params.id
  );

  let signs;
  if (playlist && 0 < playlist.signIds.length && 1 < allSigns.length) {
    signs = playlist.signIds.map(
      signId => allSigns.find(sign => sign.id === signId)
    );
  }
  return {
    signs,
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
