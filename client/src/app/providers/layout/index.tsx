import { Suspense, useLayoutEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ToastContainer } from "react-toastify";

import { Layout } from "~shared/components";
import { Preloader } from '~shared/components';
import { useAppSelector } from '~shared/hooks';

import {
  selectIsVerifiedUser,
  useLazyGetUserInfo,
  useLazyGetVerifie,
} from '~services/user';
import { selectIsAuth } from '~services/auth';

import { Footer } from "~modules/footer";
import { Header } from "~modules/header";

const LayoutProvider: React.FC = () => {
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

  const renderFallback = () => (
    isFetching || <Preloader isFullScreen textContent={window.translate('please_wait')} />
  );

  return (
    <Layout
      headerSlot={<Header />}
      footerSlot={<Footer />}
    >
      <ToastContainer style={{ fontSize: '15px' }} />
      <Suspense fallback={renderFallback()}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default LayoutProvider;
