import React from 'react';

import { useAppSelector } from '~shared/hooks';
import { NavbarLink } from '~shared/components';
import { selectIsVerifiedUser } from '~services/user';

import { MAIN_LINKS } from '../../lib';

const AuthMain: React.FC = () => {
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);

  return (
    <>
      {MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink
          to={to}
          key={to}
          isDisabled={!isVerifiedUser}
          className='header-main-group__item'
        >
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMain;
