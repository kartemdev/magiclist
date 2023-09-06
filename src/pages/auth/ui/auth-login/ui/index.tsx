import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '~modules/auth';
import { Button } from '~shared/components';

import './styles.scss';

const AuthLogin: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div className='auth-login'>

      <div className='auth-login__form'>
        <div className='auth-login__title'>
          {'Войти в аккаунт'}
        </div>

        <LoginForm />
        <Button
          className='auth-login__navigate'
          typeStyle='secondary'
          onClick={() => navigate('/auth/register')}
        >
          {'Создать аккаунт'}
        </Button>
      </div>
    </div>
  );
};

export default AuthLogin;
