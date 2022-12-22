import React, { Component } from "react";

import { Container, DivInfosAlbum, DivMusics } from "./style";

import getMusic from "../services/musicsAPI";

import Carregando from "../Carregando/Carregando";
import Header from "../Header/Header";
import MusicCard from "../MusicCard/MusicCard";

export default class Album extends Component {
  state = {
    infosAlbum: "",
    musics: "",
    loading: true,
  };

  async componentDidMount() {
    const {
      history: { location },
    } = this.props;
    const idMusic = location.pathname.slice(7);
    const musics = await getMusic(idMusic);
    const arrayMusics = musics.slice(1);
    this.setState({
      infosAlbum: musics[0],
      musics: arrayMusics,
      loading: false,
    });
  }

  render() {
    const { infosAlbum, musics, loading } = this.state;

    return (
      <>
        <Header />
        <Container>
          {loading ? (
            <Carregando />
          ) : (
            <Container>
              <DivInfosAlbum>
                <img src={infosAlbum.artworkUrl100} alt="capa álbum" />
                <h2>{infosAlbum.collectionName}</h2>
              </DivInfosAlbum>
              <h3>{infosAlbum.artistName}</h3>
              <DivMusics>
                {musics.map((music) => (
                  <MusicCard music={music} key={music.trackId} />
                ))}
              </DivMusics>
            </Container>
          )}
        </Container>
      </>
    );
  }
}
