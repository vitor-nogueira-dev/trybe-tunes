import React, { Component } from "react";

import { DivBox } from "./style";
import PropTypes from "prop-types";

import { createUser } from "../services/userAPI";

export default class Login extends Component {
  state = {
    name: "",
    email: "",
    isDisableButtonLogin: true,
    image: "",
    description: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    const three = 3;
    if (name === "name") {
      const loginLength = value.length;
      if (loginLength >= three) {
        this.setState({
          isDisableButtonLogin: false,
        });
      }
    }
  };

  handleUser = (name, email, image, description) => {
    const { history } = this.props;
    this.setState({ loading: true }, async () => {
      if (name) {
        await createUser({
          name: name,
          email: email,
          image: image,
          description: description,
        });
        return history.push("/search");
      }
    });
  };
  render() {
    const { isDisableButtonLogin, name, email, image, description } =
      this.state;

    return (
      <DivBox className="login-box">
        <h2>🎧</h2>
        <div className="user-box">
          <input
            required=""
            type="text"
            name="name"
            onChange={this.handleChange}
            // onKeyDown={(e) => e.key === 'Enter' && this.handleUser(name, email, image, description) }
          />
          <label>Nome</label>
        </div>
        <div className="user-box">
          <input
            required=""
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          <label>E-mail</label>
        </div>
        <div className="user-box">
          <input
            required=""
            type="text"
            name="image"
            onChange={this.handleChange}
          />
          <label>Foto perfil</label>
        </div>
        <div className="user-box">
          <input
            required=""
            type="text"
            name="description"
            onChange={this.handleChange}
          />
          <label>Descrição</label>
        </div>
        <div className="div-button">
          <button
            disabled={isDisableButtonLogin}
            onClick={() =>
              this.handleUser(name, email, image, description)
            }
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </button>
        </div>
      </DivBox>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
