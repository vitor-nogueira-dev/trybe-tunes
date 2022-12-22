import React, { Component } from "react";

import searchAlbumsAPI from "../services/searchAlbumsAPI";

import Carregando from "../Carregando/Carregando";
import Header from "../Header/Header";
import Albuns from "../Albuns/Albuns";
import NotFound from "../NotFound/NotFound";

import { Container, Div } from "./style";

export default class Search extends Component {
  state = {
    isDisabledSearch: true,
    albuns: [],
    search: "",
    loading: false,
    notSearch: false,
    result: false,
    nameArtist: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    const two = 2;
    if (name === "search") {
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
        search: "",
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
      }
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
    const { history } = this.props;

    if (notSearch) {
      history.push("/notFound");
      return <NotFound />;
    }

    return (
      <>
        <Header />
        <Container>
          <Div>
            <input
              type="text"
              name="search"
              value={search}
              placeholder="pesquise seu artista favorito"
              onChange={this.handleChange}
            />
            <button
              type="button"
              disabled={isDisabledSearch}
              onClick={() => this.getArtists(search)}
            >
              Pesquisar
            </button>
          </Div>
          {loading && <Carregando />}
          <Div>
            {result ? <h2>{`Resultado de álbuns: ${nameArtist}`}</h2> : null}
          </Div>
          <Div>
            <Albuns albums={albuns} />
          </Div>
        </Container>
      </>
    );
  }
}
