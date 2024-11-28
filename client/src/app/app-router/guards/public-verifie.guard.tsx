import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const PublicVerifeGuard = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='auth' state={{ fromPath: location.pathname }} replace />;
  }

  if (!isVerified) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default PublicVerifeGuard;
