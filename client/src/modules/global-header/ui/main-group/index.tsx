import React from 'react';
import { NavbarLink } from '~shared/ui';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const MainGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='main-group'>
      {isAuth && (
        <NavbarLink to='/table' className='main-group__item'>
          {window.translate('table')}
        </NavbarLink>
      )}
    </div>
  );
};

export default MainGroup;
