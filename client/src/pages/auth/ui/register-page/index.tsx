import { useNavigate } from 'react-router-dom';

import { RegisterForm } from '~modules/auth';
import { useRegister } from '~services/auth';
import { Button } from '~shared/ui';

import '../index.scss';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [, { isLoading }] = useRegister({ fixedCacheKey: 'register' });

  return (
    <div className='auth-page register-page'>
      <div className='auth-page__form'>
        <div className='auth-page__title'>{window.translate('create_acc')}</div>

        <RegisterForm />

        <Button
          className='auth-page__navigate'
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

export default RegisterPage;
