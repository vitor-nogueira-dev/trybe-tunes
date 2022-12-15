import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carregando from '../pages/Carregando';
import { getUser } from '../services/userAPI';
// import Search from '../pages/Search';
// import Favorites from '../pages/Favorites';
// import Profile from '../pages/Profile';
// import { getUser } from '../services/userAPI';

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

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevState);
  // }

  render() {
    const { loading, user } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <ul>
            <li><Link data-testid="link-to-search" to="/search"> Pesquisa </Link></li>
            <li>
              <Link data-testid="link-to-favorites" to="/favorites"> Favoritas </Link>
            </li>
            <li><Link data-testid="link-to-profile" to="/profile"> Perfil </Link></li>
          </ul>
        </nav>
        {/*
        <p>{loading && <Carregando />}</p> */}
        {loading ? <Carregando /> : <p data-testid="header-user-name">{user.name}</p> }
      </header>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.shape({}),
}.isRequired;
