import { createStore } from 'redux'
import PouchDB from 'pouchdb'
import { persistentStore } from 'redux-pouchdb';

import rootReducer from './reducers'

const backEndUrl = process.env.REACT_APP_BACK_END_URL;

const configureStore = () => {

  const remoteDb = new PouchDB(`${backEndUrl}signage-player`);

  const localDb = new PouchDB('signage-player');
  localDb.sync(
    remoteDb,
    {
      live: true,
      retry: true
    },
  );

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    persistentStore(localDb)
  );

  return store;
}

export default configureStore;
