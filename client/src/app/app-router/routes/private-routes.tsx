import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Guard from '../guards';

const ProfilePage = lazy(() => import(/* webpackChunkName: "ml_profile" */ '~pages/profile'));
const ResiduesPage = lazy(() => import(/* webpackChunkName: "ml_residues" */ '~pages/residues'));

const privateRoutes: RouteObject = {
  element: <Guard.Private />,
  children: [
    {
      element: <Guard.Mobile />,
      children: [
        {
          path: 'residues',
          element: <ResiduesPage />,
        },
      ],
    },
    {
      path: 'profile',
      element: <ProfilePage />,
    },
  ],
};

export default privateRoutes;
