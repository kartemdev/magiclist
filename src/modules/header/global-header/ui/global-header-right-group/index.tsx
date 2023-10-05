import React from 'react';
import { Button, NavbarLink } from '~shared/ui';
import { LangsSelector } from '~components/langs-selector';

import './styles.scss';
import { LogoutButton } from '~components/logout-button';

interface IProps {
  isAuth: boolean;
}

const GlobalHeaderRightGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='global-header-right-group'>
      {isAuth ? (
        <>
          <NavbarLink to='/table' className='global-header-right-group__item'>
            {window.translate('table')}
          </NavbarLink>
          <div className='global-header-right-group__item'>
            <LogoutButton />
          </div>
        </>
      ) : (
        <>
          <NavbarLink to='/auth/login'>
            <Button typeStyle='primary'>
              {window.translate('sign_in')}
            </Button>
          </NavbarLink>
          <NavbarLink to='/auth/register'>
            <Button typeStyle='secondary'>
              {window.translate('sign_up')}
            </Button>
          </NavbarLink>
        </>
      )}
      <div className='global-header-right-group__langs-selector'>
        <LangsSelector />
      </div>
    </div>
  );
};

export default GlobalHeaderRightGroup;
