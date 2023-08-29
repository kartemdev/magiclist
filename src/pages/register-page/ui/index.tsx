import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/components';
import { RegisterForm } from 'modules/register-form';

import './styles.scss';

const RegisterPage: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div className='register-page'>

      <div className='register-page__form'>
        <div className='register-page__title'>
          {'Создать аккаунт'}
        </div>

        <RegisterForm />
        <Button
          className='register-page__navigate'
          typeStyle='secondary'
          onClick={() => navigate('/auth/login')}
        >
          {'Уже есть аккаунт'}
        </Button>
      </div>
    </div>
  )
}

export default RegisterPage;
