import { useNavigate } from 'react-router-dom';

import { useLogout } from '~services/auth';
import { Button } from '~shared/components';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  
  const [logoutUser] = useLogout({ fixedCacheKey: 'logout' });

  const handleLogout = () => {
    logoutUser(() => navigate('/'));
  };

  return (
    <>
      <Button
        onClick={handleLogout}
        className='logout-button'
        typeStyle='secondary'
      >
        {window.translate('logout')}
      </Button>
    </>
  )
}

export default LogoutButton;
