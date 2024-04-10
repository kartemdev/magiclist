import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';
import { selectIsAuth } from '~services/auth';

const PrivateRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="auth" state={{ fromPath: location.pathname }} />;
};

export default PrivateRoute;
