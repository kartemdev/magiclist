import React from 'react';
import { ListIcon } from '~shared/assets';
import { NavbarLink } from '~shared/ui';

import './styles.scss';

const GlobalHeaderLeftGroup: React.FC = () => {
  return (
    <div className='global-header-left-group'>
      <NavbarLink to='/' className='global-header-left-group__item'>
        <div className='global-header-left-group__logo'>
          <ListIcon className='global-header-left-group__logo-icon'/>
          <span className='global-header-left-group__title'>Magic list</span>
        </div>
      </NavbarLink>
    </div>
  );
};

export default GlobalHeaderLeftGroup;
