import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';
import './css/Login.css'

export default class Login extends Component {
  state = {
    nameLogin: '',
    email: '',
    description: '',
    isDisableButtonLogin: true,
    loading: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    const three = 3;
    if (name === 'nameLogin') {
      const loginLength = value.length;
      console.log(loginLength);
      if (loginLength >= three) {
        this.setState({
          isDisableButtonLogin: false,
        });
      }
    }
  };

  handleUser = (user) => {
    const { history } = this.props;
    this.setState({ loading: true }, async () => {
      if (user) {
        await createUser({ name: user });
        return history.push('/search');
      }
    });
  };

  render() {
    const { isDisableButtonLogin, nameLogin, loading } = this.state;

    return (
      <div data-testid="page-login">
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="name">Nome: 
            <input
              type="text"
              id="name"
              name="name"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">E-mail:
            <input
              type="text"
              id="email"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">Descrição:
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="foto">Foto perfil:
            <input
              type="text"
              name="foto"
              id="foto"
            />
          </label>
          <button
            type="button"
            disabled={ isDisableButtonLogin }
            onClick={ () => this.handleUser(nameLogin) }
          >
            Entrar
          </button>
        </fieldset>
        { loading && <Carregando /> }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
