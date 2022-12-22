import React, { Component } from "react";

import Carregando from "../Carregando/Carregando";
import { Container } from "../Profile/style";

import { getUser, updateUser } from "../services/userAPI";
import PropTypes from "prop-types";

export default class ProfileEdit extends Component {
  state = {
    loading: false,
    name: "",
    email: "",
    image: "",
    description: "",
    isDisabled: true,
  };

  componentDidMount() {
 
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        name: user.name,
        email: user.email,
        image: user.image,
        description: user.description,
        loading: false,
      });
    });
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.handleValidate
    );
  };

  handleValidate = () => {
    const { name, email, description, image } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i;
    const validateName = name.length !== 0;
    const validateEmail = regex.test(email);
    const validateImage = image.length !== 0;
    const validateDescription = description.length !== 0;
    
    this.setState({
      isDisabled: !(
        validateName &&
        validateEmail &&
        validateDescription &&
        validateImage
      ),
    });
  };

  update = async (name, email, description, image) => {
    console.log(name, email);
    const { history } = this.props;

    await updateUser({
      name,
      email,
      description,
      image,
    });
    history.push("/profile");
  };

  render() {
    const { loading, name, email, description, image, isDisabled } = this.state;
    console.log(isDisabled);
    return (
      <div>
        {loading ? (
          <Carregando />
        ) : (
          <Container>
            <p>Editar perfil</p>
            <div className="user-box">
              <input
                required=""
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <label>Nome</label>
            </div>
            <div className="user-box">
              <input
                required=""
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <label>E-mail</label>
            </div>
            <div className="user-box">
              <input
                required=""
                name="description"
                value={description}
                onChange={this.handleChange}
              />
              <label>Descrição</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="image"

                value={image}
                onChange={this.handleChange}
              />
              <label>Foto perfil (url)</label>
            </div>
            <img src={image} alt="foto-perfil" />
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => this.update(name, email, description, image)}
            >
              Salvar
            </button>
          </Container>
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
