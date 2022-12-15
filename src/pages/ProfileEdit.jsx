import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Carregando from './Carregando';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  state = {
    // user: {},
    loading: false,
    name: '',
    email: '',
    image: '',
    description: '',
    isDisabled: true,
  };

  async componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        // user,
        // loading: false,
        name: user.name,
        email: user.email,
        image: user.image,
        description: user.description,
        loading: false,
      });
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    }, this.handleValidate);
  };

  handleValidate = () => {
    const { name, email, description, image } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i;
    const validateName = name.length !== 0;
    const validateEmail = regex.test(email);
    const validateImage = image.length !== 0;
    const validateDescription = description.length !== 0;
    this.setState({
      isDisabled:
      !(validateName
        && validateEmail
        && validateDescription
        && validateImage),
    });
  };

  update = async (name, email, description, image) => {
    console.log(name, email);
    const { history } = this.props;
    // console.log(history);
    await updateUser({
      name,
      email,
      description,
      image,
    });
    history.push('/profile');
  };

  render() {
    const { loading, name, email, description, image, isDisabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading ? (<Carregando />
        ) : (
          <>
            <p>Editar perfil</p>
            <input
              type="text"
              name="name"
              id=""
              value={ name }
              data-testid="edit-input-name"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="email"
              id=""
              value={ email }
              data-testid="edit-input-email"
              onChange={ this.handleChange }
            />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              value={ description }
              data-testid="edit-input-description"
              onChange={ this.handleChange }
            />
            <br />
            <input
              type="text"
              name="image"
              id="foto"
              value={ image }
              data-testid="edit-input-image"
              onChange={ this.handleChange }
            />
            <img
              src={ image }
              alt="foto-perfil"
            />
            <button
              type="button"
              disabled={ isDisabled }
              data-testid="edit-button-save"
              onClick={ () => this.update(name, email, description, image) }
            >
              Salvar
            </button>
          </>
        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
