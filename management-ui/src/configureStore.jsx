import { createStore } from 'redux'
import PouchDB from 'pouchdb'
import { persistentStore } from 'redux-pouchdb';

import rootReducer from './reducers'

const configureStore = () => {

  const remoteDb = new PouchDB('http://localhost:5984/signage-player');

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
