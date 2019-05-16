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
              Copyright © 2018&ndash;2019 Henrik Franciscus Leppä
            </small>
          </p>
          <p>
            <small>
              This is free software. You may redistribute copies of it under the
              terms of the
              {' '}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="external noopener noreferrer"
              >
                <abbr title="Opens in a new tab/window">
                  ↗
                </abbr>
                MIT License
              </a>
              . There is NO WARRANTY, to the extent permitted by law.
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
