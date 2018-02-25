import * as types from '../actionTypes';

export const createNewSign = props => {
  return {
    type: types.CREATE_NEW_SIGN,
  };
};

export const updateSign = props => {
  return {
    type: types.UPDATE_SIGN,
    props,
  };
};

export const deleteSign = id => {
  return {
    type: types.DELETE_SIGN,
    id,
  };
};
