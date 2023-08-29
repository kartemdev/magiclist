import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/components';
import { LoginForm } from 'modules/login-form';

import './styles.scss';

const LoginPage: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div className='login-page'>

      <div className='login-page__form'>
        <div className='login-page__title'>
          {'Войти в аккаунт'}
        </div>

        <LoginForm />
        <Button
          className='login-page__navigate'
          typeStyle='secondary'
          onClick={() => navigate('/auth/register')}
        >
          {'Создать аккаунт'}
        </Button>
      </div>
    </div>
  )
}

export default LoginPage;
