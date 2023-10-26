import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Preloader } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import { selectIsAuth, useLogout } from '~services/auth';

import './styles.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

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
            <Button onClick={() => navigate('/auth/register')}>{window.translate('begin')}</Button>
          )}
        </>
    </div>
  );
};

export default HomePage;
