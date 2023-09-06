import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, StoreProvider } from './providers';
import AppRoute from './app-route';

import '~shared/scss';

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
