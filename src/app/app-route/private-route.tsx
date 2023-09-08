import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from '~services/auth';
import { useAppSelector } from '~shared/hooks';

const PrivateRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? <Outlet /> : <Navigate to="auth/login" />;
};

export default PrivateRoute;
