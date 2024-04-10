import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  to: string;
  className?: string;
  isDisabled?: boolean;
  children: React.ReactNode | React.ReactPortal; 
}

const NavbarLink: React.FC<IProps> = (props) => {
  const {
    to,
    className,
    isDisabled,
    children,
  } = props;

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

NavbarLink.defaultProps = {
  className: '',
  isDisabled: false,
};

export default NavbarLink;
