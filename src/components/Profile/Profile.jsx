import React, { Component } from "react";

import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Carregando from "../Carregando/Carregando";

import { getUser } from "../services/userAPI";

import { Container, DivInfosUser } from "./style";

export default class Profile extends Component {
  state = {
    user: {},
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({ user, loading: false });
    });
  }

  render() {
    const {
      user: { name, image, email, description },
      loading,
    } = this.state;
    return (
      <>
        <Header />
        {loading ? (
          <Carregando />
        ) : (
          <Container className="">
            <DivInfosUser>
              <img data-testid="profile-image" alt="foto-perfil" src={image} />
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{description}</p>
            </DivInfosUser>
            <button type="button">
              <Link to="/profile/edit">Editar perfil</Link>
            </button>
          </Container>
        )}
      </>
    );
  }
}
