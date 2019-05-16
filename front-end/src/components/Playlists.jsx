import React, { Component } from 'react';
import PlaylistList from '../containers/PlaylistList';

class Playlists extends Component {

  render() {
    return (
      <main>
        <header>
          <h1>
            HFL Signage Player: Front-end 0.3.0
          </h1>
          <p>
            <small>
              Copyright © 2018 Henrik Franciscus Leppä<br />
              All rights reserved.
            </small>
          </p>
        </header>
        <p>
          This web app plays the playlists that have been created in Management
          UI.
        </p>
        <p>
          You can toggle full screen mode by pressing the <kbd>F11</kbd> key.
        </p>
        <section>
          <h2>
            Playlists
          </h2>
          <PlaylistList />
        </section>
      </main>
    );
  };
};

export default Playlists;
