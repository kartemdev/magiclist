import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '~modules/auth';
import { useLogin } from '~services/auth';
import { Button } from '~shared/components';

import './styles.scss';

const AuthLogin: React.FC = () => {
  const navigate =  useNavigate();
  const [, { isLoading }] = useLogin({ fixedCacheKey: 'login' });

  return (
    <div className='auth-login'>

      <div className='auth-login__form'>
        <div className='auth-login__title'>
          {window.translate('sign_in_acc')}
        </div>

        <LoginForm />
        <Button
          className='auth-login__navigate'
          typeStyle='secondary'
          isDisabled={isLoading}
          onClick={() => navigate('/auth/register')}
        >
          {window.translate('create_acc')}
        </Button>
      </div>
    </div>
  );
};

export default AuthLogin;
