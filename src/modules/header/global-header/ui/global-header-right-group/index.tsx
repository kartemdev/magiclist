import React from 'react';
import { Button, NavbarLink } from '~shared/components';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const GlobalHeaderRightGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='global-header-right-group'>
      {isAuth ? (
        <>
          <NavbarLink to='/table' className='global-header-right-group__item'>
            {'Таблица'}
          </NavbarLink>  
        </>
      ) : (
        <>
          <NavbarLink to='/auth/login'>
            <Button typeStyle='primary'>
              {'Войти'}
            </Button>
          </NavbarLink>
          <NavbarLink to='/auth/register'>
            <Button typeStyle='secondary'>
              {'Регистрация'}
            </Button>
          </NavbarLink>
        </>
      )}
    </div>
  );
};

export default GlobalHeaderRightGroup;
