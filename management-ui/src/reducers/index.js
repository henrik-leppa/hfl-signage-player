import { combineReducers } from 'redux';
import playlists from './playlists';
import signs from './signs';

const reducers = combineReducers({
  playlists,
  signs,
});

export default reducers;
