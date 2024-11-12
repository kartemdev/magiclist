import { Suspense, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from '~shared/ui';
import { Preloader } from '~shared/ui';
import { useAppSelector } from '~shared/hooks';

import { selectIsVerifiedUser, useLazyGetUserInfo, useLazyGetVerifie } from '~services/user';
import { selectIsAuth } from '~services/auth';

import { Footer } from '~modules/footer';
import { Header } from '~modules/header';

const LayoutProvider: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);
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

  const renderFallback = () => isFetching || <Preloader isFullScreen />;

  return (
    <Layout headerSlot={<Header />} footerSlot={<Footer />}>
      {isFetching && <Preloader isFullScreen />}

      <ToastContainer style={{ fontSize: '15px' }} />

      <Suspense fallback={renderFallback()}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default LayoutProvider;
