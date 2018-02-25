import { connect } from 'react-redux';
import {
  default as SignInPlaylistComponent
} from '../components/SignInPlaylist';
import {
  moveSignInPlaylist,
  removeSignFromPlaylist,
} from '../actions/playlists';

const mapStateToProps = (state, ownProps) => {
  return {
    allSigns: state.signs,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSignMoveClick: props => {
      dispatch(moveSignInPlaylist(props));
    },
    onSignRemoveClick: props => {
      dispatch(removeSignFromPlaylist(props));
    },
  };
};

const SignInPlaylist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInPlaylistComponent);

export default SignInPlaylist;
