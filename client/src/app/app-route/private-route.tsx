import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth } from '~services/auth';
import { useAppSelector } from '~shared/hooks';

const PrivateRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="auth" state={{ fromPath: location.pathname }} />;
};

export default PrivateRoute;
