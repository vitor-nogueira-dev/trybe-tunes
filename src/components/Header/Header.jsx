import React, { Component } from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";

import { getUser } from "../services/userAPI";

import { Container, Div } from "./styles";

export default class Header extends Component {
  state = {
    loading: true,
    user: {},
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const teste = await getUser();
      this.setState({
        loading: false,
        user: teste,
      });
    });
  }

  render() {
    const {
      loading,
      user: { name, image },
    } = this.state;

    return (
      <Container>
        <Div>
          <Link to="/">
            {" "}
            <HomeIcon />
          </Link>
          <Link to="/search">
            <SearchIcon />{" "}
          </Link>
          <Link to="/favorites">
            {" "}
            <FavoriteBorderIcon />
          </Link>
          <Link to="/profile">
            {" "}
            <PermIdentityIcon />
          </Link>
          <Div className="name">
            {loading ? (
              <img
                src="http://gifmania.com.br/wp-content/uploads/2020/05/gif-carregando-loading.gif"
                alt="gif carregando"
              />
            ) : (
              <>
                <img src={image} alt="foto perfil" />
                <p>{name}</p>
              </>
            )}
          </Div>
        </Div>
      </Container>
    );
  }
}
