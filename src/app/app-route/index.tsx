import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createColumnHelper } from '@tanstack/react-table';
import { Preloader, Table } from '~shared/ui';
import { Page404 } from '~shared/ui';
import PublicRoute from './public-route';
import PrivateRoute from './private-route';
import { useTranslation } from 'react-i18next';
import { lazily } from 'react-lazily';

const { HomePage } = lazily(() => import(/* webpackChunkName: "ml_home" */ '~pages/home'));
const { AuthPage } = lazily(() => import(/* webpackChunkName: "ml_auth" */ '~pages/auth'));
const { LayoutPage } = lazily(() => import(/* webpackChunkName: "ml_layout" */ '~pages/layout'));

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

  const renderFallback = () => (
    <Preloader isFullScreen textContent={window.translate('please_wait')} />
  );

  const { t } = useTranslation();
  window.translate = t;

  return (
    <Routes>
      <Route element={
        <Suspense fallback={renderFallback()}>
          <LayoutPage />
        </Suspense>
      }>
        <Route path='/' element={
          <Suspense fallback={renderFallback()}>
            <HomePage />
          </Suspense>
        }/>
        <Route element={<PublicRoute />}>
          <Route path='auth/*' element={
            <Suspense fallback={renderFallback()}>
              <AuthPage />
            </Suspense>
          }/>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='table' element={<Table
            data={tableData}
            isMultipleSelect
            isCheckBoxSelect
            columns={getColumns()}
          />}/>
          <Route path='profile' element={<Table
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
