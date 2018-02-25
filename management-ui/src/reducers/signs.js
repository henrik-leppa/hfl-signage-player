import { persistentReducer } from 'redux-pouchdb';
import * as types from '../actionTypes';
import uuidv4 from 'uuid/v4';

const signs = (state = [], action) => {
  let newState;
  switch (action.type) {
    case types.CREATE_NEW_SIGN:
      newState = [ ...state ];
      newState.unshift({
        id: uuidv4(),
        title: "Untitled",
        html: '',
      });
      return newState;
    case types.UPDATE_SIGN:
      return state.map(sign => {
        if (sign.id === action.props.id) {
          return {
            ...sign,
            ...action.props,
          };
        }
        else {
          return sign;
        }
      });
    case types.DELETE_SIGN:
      return state.filter(sign => sign.id !== action.id);
    default:
      return state;
  }
};

export default persistentReducer(signs);
