import { useNavigate } from 'react-router-dom';

import { useLogout } from '~services/auth';
import { Button } from '~shared/ui';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const [logoutUser] = useLogout({ fixedCacheKey: 'logout' });

  const redirectToHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    logoutUser({
      onSuccess: redirectToHome,
      onError: redirectToHome,
    });
  };

  return (
    <>
      <Button onClick={handleLogout} className='logout-button' typeStyle='secondary'>
        {window.translate('logout')}
      </Button>
    </>
  );
};

export default LogoutButton;
