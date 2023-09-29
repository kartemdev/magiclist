import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRefresh } from '~services/auth';
import { Preloader } from '~shared/ui';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useRefresh();
  const { t } = useTranslation();

  return isLoading ? <Preloader isFullScreen textContent={t('please_wait')}/> : <>{children}</>;
};

export default AuthProvider;
