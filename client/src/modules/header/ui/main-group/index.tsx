import React from 'react';
import { NavbarLink } from '~shared/components';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const MainGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='header-main-group'>
      {isAuth && (
        <NavbarLink to='/table' className='header-main-group__item'>
          {window.translate('table')}
        </NavbarLink>
      )}
    </div>
  );
};

export default MainGroup;
