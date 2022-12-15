import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carregando from '../pages/Carregando';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  state = {
    loading: false,
    favorite: false,
    // music: this.props.music,
  };

  async componentDidMount() {
    this.setState({
      favorite: await this.favorite(),
    });
  }

  handleChange = async ({ target: { checked } }) => {
    const { music } = this.props;

    this.setState({ loading: true });

    if (checked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
    this.setState({ favorite: checked, loading: false });
  };

  favorite = async () => {
    const {
      music: { trackId },
    } = this.props;
    const getFavorites = await getFavoriteSongs();
    return getFavorites.map((music) => music.trackId).includes(trackId);
  };

  render() {
    const { loading, favorite } = this.state;
    const { music, handleClick } = this.props;
    console.log(favorite);
    return (
      <div>
        {loading ? (
          <Carregando />
        ) : (
          <ul>
            <li>{music.trackName}</li>
            <audio
              data-testid="audio-component"
              src={ music.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor={ `${music.trackId}` }>
              <input
                type="checkbox"
                // name={ `${song.trackId}` }
                name="favorite"
                id={ `${music.trackId}` }
                checked={ favorite }
                onChange={ this.handleChange }
                data-testid={ `checkbox-music-${music.trackId}` }
                onClick={ handleClick }
              />
              Favorita
            </label>
          </ul>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape({
    length: PropTypes.number,
  }),
}.isRequired;
