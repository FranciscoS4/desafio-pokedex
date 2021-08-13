import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Search from '../pages/Procurar';
import Favorites from '../pages/Favoritos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/home" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Routes;