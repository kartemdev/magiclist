import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import { resources } from '~langs';

import { AuthProvider, StoreProvider } from './providers';
import AppRoute from './app-router';

import '~shared/scss';

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language-ml') || 'ru',
  fallbackLng: ['en', 'ru'],
  interpolation: {
    escapeValue: false,
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <StoreProvider>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </StoreProvider>
  </StrictMode>,
);
