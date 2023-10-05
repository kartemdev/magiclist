import React from 'react';
import { GithubIcon, TelegramIcon } from '~shared/assets';
import { Button, NavbarLink } from '~shared/ui';
import { LangsSelector } from '~components/langs-selector';
import { LogoutButton } from '~components/logout-button';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const GlobalHeaderMenuGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='global-header-menu-group'>
      <div className='global-header-menu-group__body'>
        {isAuth ? (
          <>
            <div className='global-header-menu-group__body-button'>
              <LogoutButton />
            </div> 
            <NavbarLink to='/table' className='global-header-menu-group__body-item'>
              {window.translate('table')}
            </NavbarLink>
          </>
        ) : (
          <>
            <NavbarLink to='/auth/login' className='global-header-menu-group__body-button'>
              <Button typeStyle='primary'>
                {window.translate('sign_in')}
              </Button>
            </NavbarLink>
            <NavbarLink to='/auth/register' className='global-header-menu-group__body-button'>
              <Button typeStyle='secondary'>
                {window.translate('sign_up')}
              </Button>
            </NavbarLink>
          </>
        )}
      </div>
      <div className='global-header-menu-group__footer'>
        <div className='global-header-menu-group__langs-selector'>
          <LangsSelector />
        </div>
        <div className='global-header-menu-group__footer-links'>
          <a
            className='global-header-menu-group__github'
            href="https://github.com/kartemdev"
            target='_blank'
          >
            <GithubIcon className='global-header-menu-group__github-icon'/>
          </a>
          <a
            className='global-header-menu-group__telegram'
            href="https://t.me/kartemdev"
            target='_blank'
          >
            <TelegramIcon className='global-header-menu-group__telegram-icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeaderMenuGroup;
