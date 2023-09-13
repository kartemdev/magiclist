import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '~modules/auth';
import { Button } from '~shared/components';

import './styles.scss';

const AuthRegister: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div className='auth-register'>

      <div className='auth-register__form'>
        <div className='auth-register__title'>
          {'Создать аккаунт'}
        </div>

        <RegisterForm />
        <Button
          className='auth-register__navigate'
          typeStyle='secondary'
          onClick={() => navigate('/auth/login')}
        >
          {'Уже есть аккаунт'}
        </Button>
      </div>
    </div>
  );
};

export default AuthRegister;