import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Div } from "./style";
import LinkIcon from "@mui/icons-material/Link";

export default class Albuns extends Component {
  render() {
    const { albums } = this.props;

    return (
      <Container>
        {albums.map((music, index) => (
          <Div key={index}>
            <img src={music.artworkUrl100} alt="foto-album" />
            <Link to={`/album/${music.collectionId}`}>
              <LinkIcon style={{ fontSize: 16, alignItems: "center" }} />
              {`${music.artistName.substring(0, 15)}...`}
            </Link>
          </Div>
        ))}
      </Container>
    );
  }
}
