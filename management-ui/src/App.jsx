import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Files from './Files';
import PageNotFound from './PageNotFound';
import Playlists from './Playlists';
import Signs from './Signs';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signs">Files</Link>
          <Link to="/playlists">Playlists</Link>
          <Link to="/files">Files</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signs" component={Signs}/>
            <Route path="/playlists" component={Playlists}/>
            <Route path="/files" component={Files}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
