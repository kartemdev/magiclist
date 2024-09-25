import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './index.scss';

interface IProps {
  to: string;
  children: React.ReactNode | React.ReactPortal;
  className?: string;
  isDisabled?: boolean;
}

const NavbarLink: React.FC<IProps> = (props) => {
  const { to, children, className = '', isDisabled = false } = props;

  const location = useLocation();

  return (
    <Link
      to={to}
      className={classNames('ml-navbar-item', {
        [className]: className,
        ['ml-navbar-item__disabled']: isDisabled,
        [`${className}-active`]: to === location.pathname && className,
      })}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
