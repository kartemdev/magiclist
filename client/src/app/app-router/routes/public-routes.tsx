import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Guard from '../guards';

const AuthPage = lazy(() => import(/* webpackChunkName: "ml_auth" */ '~pages/auth'));

const publicRoutes: RouteObject = {
  element: <Guard.Public />,
  children: [
    {
      path: 'auth/*',
      element: <AuthPage />,
    },
  ],
};

export default publicRoutes;
