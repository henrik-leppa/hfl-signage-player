import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Playlist from '../containers/Playlist';
import Playlists from '../containers/Playlists';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Playlists}/>
        <Route path="/:id" component={Playlist}/>
        <Route component={PageNotFound}/>
      </Switch>
    );
  }
}

export default App;
