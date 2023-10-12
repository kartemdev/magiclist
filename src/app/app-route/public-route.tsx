import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuth } from '~services/auth';
import { useAppSelector } from '~shared/hooks';

const PublicRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? <Navigate to={location.state?.fromPath || '/'}  /> : <Outlet />;
};

export default PublicRoute;
