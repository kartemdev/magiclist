import React from 'react'
import { ProfileUserIcon } from '~shared/assets';
import { NavbarLink, Preloader } from '~shared/components';
import { useGetUserInfo } from '~services/user';
import { LogoutButton } from '~components/logout-button';

const AuthTools: React.FC = () => {
  const { data } = useGetUserInfo();

  return (
    <>
      <NavbarLink
        to='profile'
        isDisabled={!data?.isVerified}
        className='header-tools-group__item header-tools-group__profile'
      >
        <ProfileUserIcon className='header-tools-group__profile_icon'/>
        <div className='header-tools-group__profile_name'>
          {data?.userName}
        </div>
      </NavbarLink>
      <div className='header-tools-group__item'>
        <LogoutButton />
      </div>
    </>
  );
};

export default AuthTools;
