import React, { Component } from "react";
import { Container, Div } from "./style";
import {
  addSong,
  removeSong,
  getFavoriteSongs,
} from "../services/favoriteSongsAPI";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Carregando from "../Carregando/Carregando";

export default class MusicCard extends Component {
  state = {
    loading: false,
    favorite: false,
    idMusic: "",
  };

  async componentDidMount() {
    this.setState({
      favorite: await this.favorite(),
    });
  }

  handleChange = async ({ target: { checked } }) => {
    const { music } = this.props;
    console.log(music);
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
    const { handleClick, music } = this.props;
    return (
      <Container>
        {loading ? (
          <Carregando />
        ) : (
          <Div className="card-music">
            <Div className="music--titulo">{music.trackName}</Div>
            <Div className="music--titulo name--artist">{music.artistName}</Div>
            <audio src={music.previewUrl} controls>
              <track kind="captions" />O seu navegador não suporta o elemento{" "}
              <code>audio</code>.
            </audio>
            <Checkbox
              style={{ color: "white" }}
              name="favorite"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              id={`${music.trackId}`}
              checked={favorite}
              onChange={this.handleChange}
              onClick={handleClick}
            />
          </Div>
        )}
      </Container>
    );
  }
}
