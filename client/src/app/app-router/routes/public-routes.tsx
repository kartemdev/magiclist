import { lazy } from 'react';
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const AuthPage = lazy(() => import(/* webpackChunkName: "ml_auth" */ '~pages/auth'));

const Guard: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Outlet />;
  }

  if (!isVerified) {
    return <Navigate to="verifie" state={{ fromPath: location.pathname }} />;
  }

  return <Navigate to='/' />;
};

const publicRoutes: RouteObject = {
  element: <Guard />,
  children: [
    {
      path: 'auth/*',
      element: (
        <AuthPage />
      )
    }
  ]
};

export default publicRoutes;
