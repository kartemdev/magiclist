import { Suspense, useLayoutEffect } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { lazily } from 'react-lazily';

import { selectIsAuth } from '~services/auth';
import { Preloader, Table, Page404 } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import {
  selectIsVerifiedUser,
  useLazyGetUserInfo,
  useLazyGetVerifie,
} from '~services/user';

import { CustomRoute } from './custom-route';

const { HomePage } = lazily(() => import(/* webpackChunkName: "ml_home" */ '~pages/home'));
const { AuthPage } = lazily(() => import(/* webpackChunkName: "ml_auth" */ '~pages/auth'));
const { LayoutPage } = lazily(() => import(/* webpackChunkName: "ml_layout" */ '~pages/layout'));
const { ProfilePage } = lazily(() => import(/* webpackChunkName: "ml_profile" */ '~pages/profile'));
const { VerifiePage } = lazily(() => import(/* webpackChunkName: "ml_verifie" */ '~pages/verifie'))

const AppRoute: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser)
  const [getUserInfo, { isFetching: isFetchingUserInfo }] = useLazyGetUserInfo();
  const [getUserVerifie, { isFetching: isFetchingUserVerifie }] = useLazyGetVerifie();

  const isFetching = isFetchingUserInfo || isFetchingUserVerifie;
  
  useLayoutEffect(() => {
    if (isAuth) {
      getUserInfo(null);
    }
  }, [isAuth]);

  useLayoutEffect(() => {
    if (isAuth && !isVerifiedUser) {
      getUserVerifie(null);
    }
  }, [isAuth, isVerifiedUser]);

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
    isFetching || <Preloader isFullScreen textContent={window.translate('please_wait')} />
  );

  const { t } = useTranslation()
  window.translate = t;

  return (
    <div className='ml-app'>
      {isFetching && <Preloader isFullScreen textContent={window.translate('please_wait')} />}

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
          <Route element={<CustomRoute.Public />}>
            <Route path='auth/*' element={
              <Suspense fallback={renderFallback()}>
                <AuthPage />
              </Suspense>
            }/>
          </Route>
          <Route element={<CustomRoute.PublicVerifie />}>
            <Route path='verifie/*' element={
              <Suspense fallback={renderFallback()}>
                <VerifiePage />
              </Suspense>
            } />
          </Route>
          <Route element={<CustomRoute.PrivateVerifie />}>
            <Route element={<CustomRoute.Private />}>
              <Route path='table' element={<Table
                data={tableData}
                isMultipleSelect
                isCheckBoxSelect
                columns={getColumns()}
              />}/>
              <Route path='profile' element={<ProfilePage />}/>
            </Route>
          </Route>
          <Route path='*' element={<Page404 content={window.translate('page_not_found')} />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
