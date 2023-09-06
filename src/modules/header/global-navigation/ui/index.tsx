import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectIsAuth } from '~services/auth';
import { Navbar } from '~shared/components';
import { ListIcon } from '~shared/assets';
import { useAppSelector } from '~shared/hooks';
import SocialLinks from './social-links';
import { navGroups } from '../lib';

import './styles.scss';

const GlobalNavigation: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='global-navigation'>
      <Navbar
        logo={
          <div className='global-navigation__logo'>
            <ListIcon className='global-navigation__logo-icon'/>
            <span className='global-navigation__logo-title'>Magic list</span>
          </div>
        }
        footerMenu={<SocialLinks />}
        groups={navGroups(isAuth, isMobile)}
      />
    </div>
  );
};

export default GlobalNavigation;
