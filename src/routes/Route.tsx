import React from 'react';
import { Redirect, Route as ReactDOMRoute,
    RouteProps as ReactDOMRouterProps} from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouterProps{
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({isPrivate = false, component: Component, ...rest}) => {
  const { user } = useAuth();

  console.log(user, isPrivate);

  return (
    <ReactDOMRoute 
    {...rest} 
    render={() => {
      return isPrivate === !!user ? (
        <Component/>
      ) : (
        <Redirect to={{ pathname: isPrivate ? '/' : '/home' }} />
      )
    }}
    />
  )
};

export default Route;