import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useLogout } from '~services/auth';
import { useAppDispatch } from '~shared/hooks';
import { Button, Preloader } from '~shared/ui';

import './styles.scss';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logoutUser, { isLoading }] = useLogout();

  const loadedRef = useRef(false);

  const handleLogout = () => {
    dispatch(logoutUser);
  };
  
  useEffect(() => {
    return () => {
      if (loadedRef.current) {
        loadedRef.current = false;
        navigate('/');
      } else {
        loadedRef.current = true;
      }
    }
  }, []);

  return (
    <>
      <Button
        onClick={handleLogout}
        className={classNames('logout-button', {
          ['logout-button__loading']: isLoading,
        })}
        typeStyle='secondary'
      >
        {isLoading ? <Preloader size={23} thickness={4} /> : window.translate('logout')}
      </Button>
    </>
  )
}

export default LogoutButton;
