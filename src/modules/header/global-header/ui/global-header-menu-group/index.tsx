import React from 'react';
import { GithubIcon, TelegramIcon } from '~shared/assets';
import { Button, NavbarLink } from '~shared/components';

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
            <NavbarLink to='/table' className='global-header-menu-group__body-item'>
              {'Таблица'}
            </NavbarLink>  
          </>
        ) : (
          <>
            <NavbarLink to='/auth/login' className='global-header-menu-group__body-button'>
              <Button typeStyle='primary'>
                {'Войти'}
              </Button>
            </NavbarLink>
            <NavbarLink to='/auth/register' className='global-header-menu-group__body-button'>
              <Button typeStyle='secondary'>
                {'Регистрация'}
              </Button>
            </NavbarLink>
          </>
        )}
      </div>
      <div className='global-header-menu-group__footer'>
        <a
          className='global-header-menu-group__footer-item global-header-menu-group__github'
          href="https://github.com/kartemdev"
          target='_blank'
        >
          <GithubIcon className='global-header-menu-group__github-icon'/>
        </a>
        <a
          className='global-header-menu-group__footer-item global-header-menu-group__telegram'
          href="https://t.me/kartemdev"
          target='_blank'
        >
          <TelegramIcon className='global-header-menu-group__telegram-icon' />
        </a>
      </div>
    </div>
  );
};

export default GlobalHeaderMenuGroup;
