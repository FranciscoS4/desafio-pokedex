import React from 'react';
import { Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Search from '../pages/Procurar';
import Favorites from '../pages/Favoritos';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" component={Home} isPrivate />
    <Route path="/search" component={Search} isPrivate />
    <Route path="/favorites" component={Favorites} isPrivate />
  </Switch>
);

export default Routes;