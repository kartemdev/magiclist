import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from '~services/auth';
import { useAppSelector } from '~shared/hooks';

const PublicRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? <Navigate to="/" /> : <Outlet />
};

export default PublicRoute;
