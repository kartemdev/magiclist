import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';
import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const PublicRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Outlet />;
  }

  if (!isVerified) {
    return <Navigate to="verifie" state={{ fromPath: location.pathname }} />;
  }

  return <Navigate to="/" />;
};

export default PublicRoute;
