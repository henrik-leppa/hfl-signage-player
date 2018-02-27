import { combineReducers } from 'redux';
import { persistentReducer } from 'redux-pouchdb';

const playlists = persistentReducer((state = []) => state, 'playlists');
const signs = persistentReducer((state = []) => state, 'signs');

const reducers = combineReducers({
  playlists,
  signs,
});

export default reducers;
