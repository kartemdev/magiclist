import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useRefresh } from '~services/auth';
import { resources } from '~langs';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { isLoading } = useRefresh();

  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      fallbackLng: ['en', 'ru'],
      interpolation: {
        escapeValue: false,
      }
    });

  return isLoading ? <div>...loading</div> : <>{children}</>;
};

export default AuthProvider;
