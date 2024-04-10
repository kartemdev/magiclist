import { useMediaQuery } from 'react-responsive';

import { Navbar } from '~shared/components';

import LogoGroup from './logo-group';
import MobileGroup from './mobile';
import DesktopGroup from './desktop';

import './styles.scss';

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
