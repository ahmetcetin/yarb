import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthenticationService } from '../../services/authentication';

export const AuthenticatedRoute = ({ page, component: Component, ...rest }) => {
  const { isAuthenticated } = AuthenticationService(page);
  if (!isAuthenticated) return <Redirect to={{ pathname: '/login' }} />;

  return <Route {...rest} render={props => <Component {...props} />} />;
};
