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
          React Digital Signage Player
        </h1>
        <section>
          <h2>
            Playlists
          </h2>
          <p>
            <strong>Note:</strong> Playlists can be created in Management UI.
          </p>
          <ul>
            {linkComponents}
          </ul>
        </section>
      </main>
    );
  };
};

export default Playlists;
