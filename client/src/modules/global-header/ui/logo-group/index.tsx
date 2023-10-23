import React from 'react';
import { ListIcon } from '~shared/assets';
import { NavbarLink } from '~shared/ui';

import './styles.scss';

const LogoGroup: React.FC = () => {
  return (
    <div className='logo-group'>
      <NavbarLink to='/' className='logo-group__link'>
        <div className='logo-group__wrapper'>
          <ListIcon className='logo-group__icon'/>
          <span className='logo-group__title'>Magic list</span>
        </div>
      </NavbarLink>
    </div>
  );
};

export default LogoGroup;
