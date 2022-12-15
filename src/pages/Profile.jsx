import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

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
    const { user, loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? (<Carregando />
        ) : (
          <>
            <img data-testid="profile-image" alt="foto-perfil" src={ user.image } />
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.description}</p>
          </>
        ) }
        <button type="button">
          <Link to="/profile/edit">Editar perfil</Link>
        </button>
      </div>
    );
  }
}
