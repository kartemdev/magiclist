import { useMediaQuery } from 'react-responsive';

import { Navbar } from '~shared/ui';

import LogoGroup from './logo-group';
import MobileGroup from './mobile.ui';
import DesktopGroup from './desktop.ui';

import './index.scss';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='header'>
      <Navbar
        leftGroup={<LogoGroup />}
        rightGroup={isMobile ? <MobileGroup /> : <DesktopGroup />}
      />
    </div>
  );
};

export default Header;
