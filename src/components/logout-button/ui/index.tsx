import React from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useLogout } from '~services/auth';
import { useAppDispatch } from '~shared/hooks';
import { Button } from '~shared/ui';

import './styles.scss';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [logoutUser, { isLoading }] = useLogout({ fixedCacheKey: 'logout' });

  const handleLogout = () => {
    dispatch(logoutUser);
    navigate('/');
  };
  
  return (
    <>
      <Button
        onClick={handleLogout}
        className={classNames('logout-button', {
          ['logout-button__loading']: isLoading,
        })}
        typeStyle='secondary'
      >
        {window.translate('logout')}
      </Button>
    </>
  )
}

export default LogoutButton;
