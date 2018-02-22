import { persistentReducer } from 'redux-pouchdb';
import * as types from '../actionTypes'

const signs = (state = { text: '' }, action) => {
//  console.log(action);
  switch (action.type) {
/*
    case types.INSERT_SIGN:
      return [
        ...state,
        action.sign
      ];
    case types.UPDATE_SIGN:
      const newState = state.filter(sign => sign._id !== action.sign._id);
      newState.push(action.sign);
      return newState;
    case types.DELETE_SIGN:
      return state.filter(sign => sign._id !== action.sign._id);
*/
    case types.SIGNS_TEXT_CHANGE:
      return {
        text: action.props.text,
      };
    default:
      return state;
  }
};

export default persistentReducer(signs);
