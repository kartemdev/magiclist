import React from 'react';
import i18next from 'i18next';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import { AuthProvider, StoreProvider } from './providers';
import AppRoute from './app-route';
import { resources } from '~langs';

import '~shared/scss';

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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoute />
        </AuthProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
);
