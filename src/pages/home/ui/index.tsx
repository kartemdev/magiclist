import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import { selectIsAuth } from '~services/auth';

import './styles.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className='home-page'>
        <>
          {isAuth ? (
            <div style={{ fontSize: 30 }}>
              Julia, you my big love &#128151;
            </div>
          ) : (
            <Button onClick={() => navigate('/auth/register')}>Начать</Button>
          )}
        </>
    </div>
  );
};

export default HomePage;
