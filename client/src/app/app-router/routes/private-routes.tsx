import { lazy } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Navigate, Outlet, RouteObject, useLocation } from 'react-router-dom';

import { useAppSelector } from '~shared/hooks';
import { Table } from '~shared/components';

import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

const ProfilePage = lazy(() => import(/* webpackChunkName: "ml_profile" */ '~pages/profile'));

const Guard: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="auth" state={{ fromPath: location.pathname }} />;
  }

  if (isAuth && !isVerified) {
    return <Navigate to="verifie" state={{ fromPath: location.pathname }} />;
  }

  return <Outlet />;
};

const tableData = [
  {
    email: 'arisha@milaya.ru',
    address: 'raduga street',
    age: 0.7
  },
  {
    email: 'julia@love.ru',
    address: 'love street',
    age: 21
  },
  {
    email: 'artyom@strong.ru',
    address: 'fast street',
    age: 22
  }
];

interface TableData {
  age: number,
  email: string,
  address: string
}

const getColumns = () => {
  const columnHelper = createColumnHelper<TableData>();
  return [
    columnHelper.accessor('address', {
      header: 'Адрес'
    }),
    columnHelper.accessor('email', {
      header: 'Почта'
    }),
    columnHelper.accessor('age', {
      header: 'Возраст'
    })
  ]
}

const privateRoutes: RouteObject = {
  element: <Guard />,
  children: [
    {
      path: 'table',
      element: (
        <Table
          data={tableData}
          isMultipleSelect
          isCheckBoxSelect
          columns={getColumns()}
        />
      )
    },
    {
      path: 'profile',
      element: (
        <ProfilePage />
      )
    }
  ]
};

export default privateRoutes;
