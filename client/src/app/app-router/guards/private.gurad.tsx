import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const PrivateGuard = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='auth' state={{ fromPath: location.pathname }} replace />;
  }

  if (!isVerified) {
    return <Navigate to='verifie' state={{ fromPath: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default PrivateGuard;
