import React from 'react';
import { ListIcon } from '~shared/assets';
import { NavbarLink } from '~shared/components';

import './styles.scss';

const LogoGroup: React.FC = () => {
  return (
    <div className='header-logo-group'>
      <NavbarLink to='/' className='header-logo-group__link'>
        <div className='header-logo-group__wrapper'>
          <ListIcon className='header-logo-group__icon'/>
          <span className='header-logo-group__title'>Magic list</span>
        </div>
      </NavbarLink>
    </div>
  );
};

export default LogoGroup;
