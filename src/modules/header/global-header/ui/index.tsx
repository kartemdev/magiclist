import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectIsAuth } from '~services/auth';
import { Navbar, NavbarMenu } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import GlobalHeaderLeftGroup from './global-header-left-group';
import GlobalHeaderRightGroup from './global-header-right-group';
import GlobalHeaderMenuGroup from './global-header-menu-group';

const GlobalHeader: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='global-header'>
      <Navbar
        leftGroup={<GlobalHeaderLeftGroup />}
        rightGroup={
          isMobile ? (
            <NavbarMenu>
              <GlobalHeaderMenuGroup isAuth={isAuth} />
            </NavbarMenu>
          ) : (
            <GlobalHeaderRightGroup isAuth={isAuth} />
          )
        }
      />
    </div>
  );
};

export default GlobalHeader;
