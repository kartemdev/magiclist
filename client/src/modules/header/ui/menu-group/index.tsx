import React from 'react';
import { GithubIcon, TelegramIcon } from '~shared/assets';
import { NavbarLink } from '~shared/components';
import { LangsSelector } from '~components/langs-selector';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const MenuGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='header-menu-group'>
      <div className='header-menu-group__body'>
        {isAuth && (
          <>
            <NavbarLink to='/table' className='header-menu-group__body_item'>
              {window.translate('table')}
            </NavbarLink>
          </>
        )}
      </div>
      <div className='header-menu-group__footer'>
        <LangsSelector isTopPlacementMenu />
      </div>
    </div>
  );
};

export default MenuGroup;
