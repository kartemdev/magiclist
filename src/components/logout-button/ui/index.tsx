import React from 'react'
import { useLogout } from '~services/auth';
import { useAppDispatch } from '~shared/hooks';
import { Button } from '~shared/ui';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const [ logoutUser ] = useLogout();

  const handleLogout = () => dispatch(logoutUser);

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
