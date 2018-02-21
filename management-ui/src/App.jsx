import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Reboot, withStyles } from 'material-ui';
import AppBar from './AppBar';
import globalStyles from './globalStyles.js';
import Home from './Home';
import Files from './Files';
import PageNotFound from './PageNotFound';
import Playlists from './Playlists';
import Signs from './Signs';

const styles = theme => ({
  app: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  appWithAppBar: {
    paddingTop: '64px',
  },
  ...globalStyles
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.app} ${classes.appWithAppBar}`}>
        <Reboot />
        <AppBar />
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

const AppStyled = withStyles(styles)(App);

export default AppStyled;
