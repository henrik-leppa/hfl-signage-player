import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Playlists extends Component {

  render() {
    const linkComponents = this.props.playlists.map(playlist => (
      <li key={playlist.id}>
        <Link to={'/' + playlist.id}>
          {playlist.title}
        </Link>
      </li>
    ));

    return (
      <main>
        <h1>
          HFL Signage Player: Front-end
        </h1>
        <p>
          This web app plays the playlists that have been created in Management
          UI.
        </p>
        <section>
          <h2>
            Playlists
          </h2>
          <ul>
            {linkComponents}
          </ul>
        </section>
      </main>
    );
  };
};

export default Playlists;
