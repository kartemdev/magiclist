import React from 'react';
import { NavbarLink } from '~shared/components';
import { MAIN_LINKS } from '../../lib';

const AuthMenu: React.FC = () => {
  return (
    <>
      {MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink key={to} to={to} className='header-menu-group__body_item'>
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMenu;
