import { lazy } from 'react';
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const VerifiePage = lazy(() => import(/* webpackChunkName: "ml_verifie" */ '~pages/verifie'));

const Guard: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (isAuth && !isVerified) {
    return <Outlet />;
  }

  if (!isAuth) {
    return <Navigate to="auth" state={{ fromPath: location.pathname }} />;
  }

  return <Navigate to="/" />;
};

const publicVerifieRoutes: RouteObject = {
  element: <Guard />,
  children: [
    {
      path: 'verifie/*',
      element: (
        <VerifiePage />
      )
    }
    
  ]
};

export default publicVerifieRoutes;
