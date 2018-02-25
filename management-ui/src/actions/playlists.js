import * as types from '../actionTypes';

export const addSignToPlaylist = props => {
  return {
    type: types.ADD_SIGN_TO_PLAYLIST,
    props,
  };
};

export const moveSignInPlaylist = props => {
  return {
    type: types.MOVE_SIGN_IN_PLAYLIST,
    props,
  };
};

export const removeSignFromPlaylist = props => {
  return {
    type: types.REMOVE_SIGN_FROM_PLAYLIST,
    props,
  };
};

export const createNewPlaylist = props => {
  return {
    type: types.CREATE_NEW_PLAYLIST,
  };
};

export const updatePlaylist = props => {
  return {
    type: types.UPDATE_PLAYLIST,
    props,
  };
};

export const deletePlaylist = id => {
  return {
    type: types.DELETE_PLAYLIST,
    id,
  };
};
