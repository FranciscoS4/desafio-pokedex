import React from 'react';
import { Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Search from '../pages/Procurar';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/home" component={Home} isPrivate />
    <Route path="/" exact component={Login}/>
    <Route path="/search" component={Search} isPrivate />
  </Switch>
);

export default Routes;