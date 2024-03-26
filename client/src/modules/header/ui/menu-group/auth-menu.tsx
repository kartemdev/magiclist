import React from 'react';

import { useAppSelector } from '~shared/hooks';
import { NavbarLink } from '~shared/components';
import { selectIsVerifiedUser } from '~services/user';

import { MAIN_LINKS } from '../../lib';

const AuthMenu: React.FC = () => {
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);

  return (
    <>
      {MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink
          to={to}
          key={to}
          isDisabled={!isVerifiedUser}
          className='header-menu-group__body_item'
        >
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMenu;
