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
    <div className='menu-group'>
      <div className='menu-group__body'>
        {isAuth && (
          <>
            <NavbarLink to='/table' className='menu-group__body-item'>
              {window.translate('table')}
            </NavbarLink>
          </>
        )}
      </div>
      <div className='menu-group__footer'>
        <div className='menu-group__langs-selector'>
          <LangsSelector />
        </div>
        <div className='menu-group__footer-links'>
          <a
            className='menu-group__github'
            href="https://github.com/kartemdev"
            target='_blank'
          >
            <GithubIcon className='menu-group__github-icon'/>
          </a>
          <a
            className='menu-group__telegram'
            href="https://t.me/kartemdev"
            target='_blank'
          >
            <TelegramIcon className='menu-group__telegram-icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuGroup;
