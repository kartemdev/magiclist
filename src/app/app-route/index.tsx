import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createColumnHelper } from '@tanstack/react-table';
import { HomePage } from '~pages/home';
import { AuthPage } from '~pages/auth';
import { Table } from '~shared/components';
import PublicRoute from './public-route';
import PrivateRoute from './private-route';
import { LayoutPage } from '~pages/layout';

const AppRoute: React.FC = () => {
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
    const columnHelper = createColumnHelper<TableData | TableData[]>();
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

  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path='/' element={<HomePage />}/>
        <Route element={<PublicRoute />}>
          <Route path='auth/*' element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='table' element={<Table
            data={tableData}
            columns={getColumns()}
          />}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoute;
