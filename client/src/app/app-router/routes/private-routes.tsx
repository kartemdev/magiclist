import { lazy } from 'react';
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const ProfilePage = lazy(() => import(/* webpackChunkName: "ml_profile" */ '~pages/profile'));
const ResiduesPage = lazy(() => import(/* webpackChunkName: "ml_residues" */ '~pages/residues'));

const Guard: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='auth' state={{ fromPath: location.pathname }} />;
  }

  if (isAuth && !isVerified) {
    return <Navigate to='verifie' state={{ fromPath: location.pathname }} />;
  }

  return <Outlet />;
};

const privateRoutes: RouteObject = {
  element: <Guard />,
  children: [
    {
      path: 'profile',
      element: <ProfilePage />,
    },
    {
      path: 'residues',
      element: <ResiduesPage />,
    },
  ],
};

export default privateRoutes;
