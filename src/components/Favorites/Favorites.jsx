import React, { Component } from 'react';
import Header from '../Header/Header';
import MusicCard from '../MusicCard/MusicCard';
import {
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';
import Carregando from '../Carregando/Carregando';
import { Container, Div } from "./style"

export default class Favorites extends Component {
  state = {
    musics: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const musics = await getFavoriteSongs();
      this.setState({ musics, loading: false });
    });
  }

  handleClick = ({ target: { checked, id } }) => {
    console.log(checked);
    const { musics } = this.state;
    console.log(musics, id);
    if (!checked) {
      this.setState({ loading: true }, async () => {
        const currentMusic = musics
          .reduce((acc, curr) => Number(curr.trackId) === Number(acc), id);
        await removeSong(currentMusic);
        const arrayMusic = await getFavoriteSongs();
        this.setState({ musics: arrayMusic, loading: false });
      });
    }
  };

  render() {
    const { musics, loading } = this.state;
    return (
      <Container><Header />
        <Div>
        {loading ? (
          <Carregando />
        ) : (
          musics.map((music) => (
            <MusicCard
              music={music}
              key={music.trackId}
              handleClick={this.handleClick} />
          ))
          )}
          </Div>
      </Container>
    );
  }
}
