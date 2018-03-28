import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlaylistList extends Component {

  render() {
    const linkComponents = this.props.playlists.map(playlist => (
      <li key={playlist.id}>
        <Link to={'/' + playlist.id}>
          {playlist.title}
        </Link>
      </li>
    ));

    if (0 < linkComponents.length) {
      return (
        <ul>
          {linkComponents}
        </ul>
      );
    }
    else {
      return (
        <p>
          (No playlists found.)
        </p>
      );
    }
  };
};

export default PlaylistList;
