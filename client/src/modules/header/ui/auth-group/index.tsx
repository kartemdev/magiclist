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
    <div className='header-auth-group'>
      {isAuth ? (
        <>
          <NavbarLink to='profile' className='header-auth-group__item'>
            <ProfileUserIcon className='header-auth-group__item_profile'/>
          </NavbarLink>
          <div className='auth-group__item'>
            <LogoutButton />
          </div>
        </>
      ) : (
        <NavbarLink to='auth' className='header-auth-group__item'>
          <LoginUserIcon className='header-auth-group__item_auth'/>
        </NavbarLink>
      )}
    </div>
  );
};

export default AuthGroup;
