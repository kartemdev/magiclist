import React from 'react';
import { NavbarLink } from '~shared/components';
import { MAIN_LINKS } from '../../lib';

const AuthMain: React.FC = () => {
  return (
    <>
      {MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink key={to} to={to} className='header-main-group__item'>
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMain;
