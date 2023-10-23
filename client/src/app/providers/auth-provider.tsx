import React from 'react';
import i18next from 'i18next';
import { useRefresh } from '~services/auth';
import { Preloader } from '~shared/ui';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useRefresh();

  return isLoading ? <Preloader isFullScreen textContent={i18next.t('please_wait')}/> : <>{children}</>;
};

export default AuthProvider;
