import React from 'react';
import { Preloader } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import { selectIsAuth, useLogout } from '~services/auth';
import PreviewPage from './preview-page';

import './styles.scss';

const HomePage: React.FC = () => {
  const [, { isLoading }] = useLogout({ fixedCacheKey: 'logout' });

  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className='home-page'>
        <>
          {isLoading && <Preloader isFullScreen textContent={window.translate('please_wait')} />}
          {isAuth ? (
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
