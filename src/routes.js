import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { AuthenticatedRoute } from './components/AuthenticatedRoute';
import Login from './pages/Login';

const LoadingMessage = () => "I'm loading...";
const pages = './pages';

const routeList = [
  { path: '/page1', page: 'Page1' },
  { path: '/page2', page: 'Page2' },
];

export const Routes = () => (
  <Suspense fallback={<LoadingMessage />}>
    <Switch>
      {routeList.map(({ path, page, exact }) => (
        <AuthenticatedRoute
          exact={exact !== false}
          key={path}
          path={path}
          page={page}
          component={lazy(() => import(`${pages}/${page}`))}
        />
      ))}
      <Login />
    </Switch>
  </Suspense>
);
