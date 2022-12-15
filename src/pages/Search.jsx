import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from './Carregando';

export default class Search extends Component {
  state = {
    isDisabledSearch: true,
    albuns: [],
    search: '',
    loading: false,
    notSearch: false,
    result: false,
    nameArtist: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    const two = 2;
    if (name === 'search') {
      const searchLength = value.length;
      if (searchLength >= two) {
        this.setState({
          isDisabledSearch: false,
        });
      }
    }
  };

  getArtists(artist) {
    this.setState(
      {
        search: '',
        loading: true,
        result: true,
        nameArtist: artist,
      },

      async () => {
        const albuns = await searchAlbumsAPI(artist);
        this.setState({ albuns, loading: false });
        if (albuns.length === 0) {
          this.setState({ notSearch: true });
        }
      },
    );
  }

  render() {
    const {
      search,
      isDisabledSearch,
      albuns,
      loading,
      notSearch,
      result,
      nameArtist,
    } = this.state;

    if (notSearch) return <p>Nenhum álbum foi encontrado</p>;
    if (loading) return <Carregando />;

    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          name="search"
          value={ search }
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ isDisabledSearch }
          onClick={ () => this.getArtists(search) }
        >
          Pesquisar
        </button>
        {result ? <h4>{`Resultado de álbuns de: ${nameArtist}`}</h4> : null}
        {albuns.map((element, index) => (
          <div key={ index }>
            <img src={ element.artworkUrl100 } alt="foto-album" />
            <Link
              data-testid={ `link-to-album-${element.collectionId}` }
              to={ `/album/${element.collectionId}` }
            >
              {element.collectionName}
              {' '}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
