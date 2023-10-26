import React from 'react';
import { LogoutButton } from '~components/logout-button';
import { LoginUserIcon, ProfileUserIcon } from '~shared/assets';
import { NavbarLink } from '~shared/components';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const AuthGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='auth-group'>
      {isAuth ? (
        <>
          <NavbarLink to='profile' className='auth-group__item'>
            <ProfileUserIcon className='auth-group__item-profile'/>
          </NavbarLink>
          <div className='auth-group__item'>
            <LogoutButton />
          </div>
        </>
      ) : (
        <NavbarLink to='auth' className='auth-group__item'>
          <LoginUserIcon className='auth-group__item-auth'/>
        </NavbarLink>
      )}
    </div>
  );
};

export default AuthGroup;
