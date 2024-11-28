import { lazy, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Preloader } from '~shared/ui';
import { useAppSelector } from '~shared/hooks';

import { selectIsVerifiedUser } from '~services/user';
import { selectIsAuth, useLogout } from '~services/auth';

const HomeAuthPage = lazy(() => import(/* webpackChunkName: "ml_home_guest" */ './auth-page'));
const HomeGuestPage = lazy(() => import(/* webpackChunkName: "ml_home_guest" */ './guest-page'));

import './index.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const [, { isLoading }] = useLogout({ fixedCacheKey: 'logout' });

  const isAuth = useAppSelector(selectIsAuth);
  const isVerified = useAppSelector(selectIsVerifiedUser);

  useLayoutEffect(() => {
    if (isAuth && !isVerified) {
      navigate('/verifie');
    }
  }, [isAuth, isVerified]);

  return (
    <div className='home-page'>
      {isLoading && <Preloader isFullScreen />}
      {isAuth && isVerified ? <HomeAuthPage /> : <HomeGuestPage />}
    </div>
  );
};

export default HomePage;
