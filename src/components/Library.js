import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className='library'>

        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index} className="col-2-2" style={{ textDecoration: 'none' }}>
              <img src={album.albumCover} alt={album.title} height="400" width="400" />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
