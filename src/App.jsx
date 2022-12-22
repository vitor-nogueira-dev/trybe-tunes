import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Album from './components/Album/Album';
import Favorites from './components/Favorites/Favorites';
import Profile from './components/Profile/Profile'
import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import NotFound from './components/NotFound/NotFound';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route path="/search" component={ Search }/>
          <Route path="/album/:id" component={ Album }/>
          <Route path="/favorites" component={ Favorites }/>
          <Route path="/profile/edit" component={ ProfileEdit }/>
          <Route path="/profile" component={ Profile }/>
          <Route path="/notFound" component={ NotFound }/>
        </Switch>
      </div>
    );
  }
}


export default App;
