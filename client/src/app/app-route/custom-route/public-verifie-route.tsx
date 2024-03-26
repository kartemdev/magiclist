import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';
import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const PublicVerifieRoute: React.FC = () => {
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

export default PublicVerifieRoute;
