import * as types from '../actionTypes';

export const textChange = props => {
  return {
    type: types.SIGNS_TEXT_CHANGE,
    props
  };
};
