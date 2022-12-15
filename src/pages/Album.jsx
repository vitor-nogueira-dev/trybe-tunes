import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusic from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Carregando from './Carregando';

export default class Album extends Component {
  state = {
    infosAlbum: '',
    musics: '',
    loading: true,
  };

  async componentDidMount() {
    const { history: { location } } = this.props;
    const TWO = 2;
    const THREE = 3;
    const array = location.pathname.split('/', THREE);
    const musics = await getMusic(array[TWO]);
    const arrayMusics = musics.filter((music, index) => index !== 0);
    this.setState({ infosAlbum: musics[0], musics: arrayMusics, loading: false });
    // console.log(typeof location);
  }
  // o primeiro objeto do retorno é um álbum com as infos do álbum e os demais são as músicas

  render() {
    const { infosAlbum, musics, loading } = this.state;
    // console.log(musics);
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? (<Carregando />
        ) : (
          <>
            <img src={ infosAlbum.artworkUrl100 } alt="capa álbum" />
            <h2 data-testid="album-name">{infosAlbum.collectionName}</h2>
            <h3 data-testid="artist-name">{infosAlbum.artistName}</h3>
            {musics.map((music) => <MusicCard music={ music } key={ music.trackId } />)}
          </>)}
      </div>
    );
  }
}

Album.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;
