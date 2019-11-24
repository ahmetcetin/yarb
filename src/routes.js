import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthenticatedRoute } from './components/AuthenticatedRoute';

const LoadingMessage = () => 'Loading...';
const pages = './pages';

const authenticatedRoutes = [
  { path: '/page1', page: 'Page1', exact: false },
  { path: '/page2', page: 'Page2', exact: false },
];

const openRoutes = [
  { path: '/login', page: 'Login', exact: true },
  // { path: '/', page: 'Home' }
];

export const Routes = () => (
  <Suspense fallback={<LoadingMessage />}>
    <Switch>
      {authenticatedRoutes.map(({ path, page, exact }) => (
        <AuthenticatedRoute
          exact={exact !== false}
          key={path}
          path={path}
          page={page}
          component={lazy(() => import(`${pages}/${page}`))}
        />
      ))}
      {openRoutes.map(({ path, page, exact }) => {
        const Component = lazy(() => import(`${pages}/${page}`));
        return <Route exact={exact} path={path} render={props => <Component {...props} />} />;
      })}
    </Switch>
  </Suspense>
);
