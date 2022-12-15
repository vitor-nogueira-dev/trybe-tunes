import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/search" component={ Search }/>
          <Route path="/album/:id" component={ Album }/>
          <Route path="/favorites" component={ Favorites }/>
          <Route path="/profile/edit" component={ ProfileEdit }/>
          <Route path="/profile" component={ Profile }/>
          <Route exact path="/" component={ Login }/>
          <Route path="*" component={ NotFound }/>
        </Switch>
      </div>
    );
  }
}


export default App;
