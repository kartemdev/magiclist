
import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "~shared/hooks";
import { selectIsAuth } from "~services/auth";
import { selectIsVerifiedUser } from "~services/user";

const PrivateVerifieRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  return isAuth && isVerified ? <Outlet /> : <Navigate to="verifie" state={{ fromPath: location.pathname }} />;
};

export default PrivateVerifieRoute;
