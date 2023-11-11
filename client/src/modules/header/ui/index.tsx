import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectIsAuth } from '~services/auth';
import { Navbar, NavbarMenu } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import LogoGroup from './logo-group';
import MainGroup from './main-group';
import MenuGroup from './menu-group';
import AuthGroup from './auth-group';

import './styles.scss';

const Header: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='header'>
      <Navbar
        leftGroup={<LogoGroup />}
        rightGroup={
          isMobile ? (
            <>
              <AuthGroup isAuth={isAuth} />
              <NavbarMenu>
                <MenuGroup isAuth={isAuth} />
              </NavbarMenu>
            </>
          ) : (
            <>
              <MainGroup isAuth={isAuth} />
              <AuthGroup isAuth={isAuth} />
            </>
          )
        }
      />
    </div>
  );
};

export default Header;
