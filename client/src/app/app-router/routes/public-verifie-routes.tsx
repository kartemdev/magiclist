import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Guard from '../guards';

const VerifiePage = lazy(() => import(/* webpackChunkName: "ml_verifie" */ '~pages/verifie'));

const publicVerifieRoutes: RouteObject = {
  element: <Guard.PublicVerifie />,
  children: [
    {
      path: 'verifie/*',
      element: <VerifiePage />,
    },
  ],
};

export default publicVerifieRoutes;
