import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Preloader } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import { selectIsAuth, useLogout } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';

import PreviewPage from './preview-page';

import './styles.scss';

const HomePage: React.FC = () => {
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
        <>
          {isLoading && <Preloader isFullScreen textContent={window.translate('please_wait')} />}
          {isAuth && isVerified ? (
            <div style={{ fontSize: 30 }}>
              Julia, you my big love &#128151;
            </div>
          ) : (
            <PreviewPage />
          )}
        </>
    </div>
  );
};

export default HomePage;
