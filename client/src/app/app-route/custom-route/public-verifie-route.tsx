import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';
import { useAppSelector } from '~shared/hooks';

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
