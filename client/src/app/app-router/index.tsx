import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LayoutProvider } from '~app/providers';

import routes from './routes';

const HomePage = lazy(() => import(/* webpackChunkName: "ml_home" */ '~pages/home'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "ml_not_found" */ '~pages/not-found'));

const AppRouter: React.FC = () => {
  const { t } = useTranslation();
  window.translate = t;

  const router = createBrowserRouter([{
    element: <LayoutProvider />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'not-found',
        element: <NotFoundPage />
      },
      routes.public,
      routes.private,
      routes.publicVerifie,
      {
        path: '*',
        element: <Navigate to='not-found' />
      },
    ]
  }]);

  return (
    <div className='ml-app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
