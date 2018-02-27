import { persistentReducer } from 'redux-pouchdb';
import * as types from '../actionTypes';
import uuidv4 from 'uuid/v4';

const playlists = (state = [], action) => {
  let newState;
  switch (action.type) {
    case types.ADD_SIGN_TO_PLAYLIST:
      return state.map(playlist => {
        if (playlist.id === action.props.playlistId) {
          return {
            ...playlist,
            signIds: [
              ...playlist.signIds,
              action.props.signId,
            ],
          };
        }
        else {
          return playlist;
        }
      });
    case types.MOVE_SIGN_IN_PLAYLIST:
      return state.map(playlist => {
        if (playlist.id === action.props.playlistId) {
          const newSignIds = [ ...playlist.signIds ];
          const { arrayPosition, newArrayPosition } = action.props;
          // Swap positions with destructuring assignment syntax
          [ newSignIds[arrayPosition], newSignIds[newArrayPosition] ]
            = [ newSignIds[newArrayPosition], newSignIds[arrayPosition] ];
          return {
            ...playlist,
            signIds: newSignIds,
          };
        }
        else {
          return playlist;
        }
      });
    case types.REMOVE_SIGN_FROM_PLAYLIST:
      return state.map(playlist => {
        if (playlist.id === action.props.playlistId) {
          const newSignIds = [ ...playlist.signIds ];
          newSignIds.splice(action.props.arrayPosition, 1);
          return {
            ...playlist,
            signIds: newSignIds,
          };
        }
        else {
          return playlist;
        }
      });
    case types.CREATE_NEW_PLAYLIST:
      newState = [ ...state ];
      newState.unshift({
        id: uuidv4(),
        title: "Untitled Playlist",
        signIds: [],
      });
      return newState;
    case types.UPDATE_PLAYLIST:
      return state.map(playlist => {
        if (playlist.id === action.props.id) {
          return {
            ...playlist,
            ...action.props,
          };
        }
        else {
          return playlist;
        }
      });
    case types.DELETE_PLAYLIST:
      return state.filter(playlist => playlist.id !== action.id);
    default:
      return state;
  }
};

export default persistentReducer(playlists);
