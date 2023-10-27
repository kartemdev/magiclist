import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '~modules/auth';
import { useRegister } from '~services/auth';
import { Button } from '~shared/components';

import './styles.scss';

const AuthRegister: React.FC = () => {
  const navigate = useNavigate();
  const [, { isLoading }] = useRegister({ fixedCacheKey: 'register' })

  return (
    <div className='auth-register'>

      <div className='auth-register__form'>
        <div className='auth-register__title'>
          {window.translate('create_acc')}
        </div>

        <RegisterForm />
        <Button
          className='auth-register__navigate'
          typeStyle='secondary'
          isDisabled={isLoading}
          onClick={() => navigate('/auth/login')}
        >
          {window.translate('have_acc')}
        </Button>
      </div>
    </div>
  );
};

export default AuthRegister;
