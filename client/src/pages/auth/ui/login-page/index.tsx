import { useNavigate } from 'react-router-dom';

import { LoginForm } from '~modules/auth';
import { useLogin } from '~services/auth';
import { Button } from '~shared/ui';

import '../index.scss';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [, { isLoading }] = useLogin({ fixedCacheKey: 'login' });

  return (
    <div className='auth-page login-page'>
      <div className='auth-page__form'>
        <div className='auth-page__title'>{window.translate('sign_in_acc')}</div>

        <LoginForm />

        <Button
          className='auth-page__navigate'
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

export default LoginPage;
