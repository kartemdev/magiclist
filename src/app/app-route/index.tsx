import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createColumnHelper } from '@tanstack/react-table';
import { HomePage } from '~pages/home';
import { AuthPage } from '~pages/auth';
import { LayoutPage } from '~pages/layout';
import { Table } from '~shared/ui';
import { Page404 } from '~shared/ui';
import PublicRoute from './public-route';
import PrivateRoute from './private-route';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  window.translate = t;

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
            isMultipleSelect
            isCheckBoxSelect
            columns={getColumns()}
          />}/>
        </Route>
        <Route path='*' element={<Page404 content={window.translate('page_not_found')} />}/>
      </Route>
    </Routes>
  );
};

export default AppRoute;
