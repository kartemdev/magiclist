import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.scss';

interface IProps {
  to: string;
  className?: string;
  children: React.ReactNode | React.ReactPortal; 
}

const NavbarLink: React.FC<IProps> = (props) => {
  const {
    to,
    className,
    children,
  } = props;

  const location = useLocation();

  return (
    <Link
      to={to}
      className={classNames('magic-navbar-item', {
        [className]: className,
        [`${className}-active`]: to === location.pathname && className,
      })}
    >
      {children}
    </Link>
  );
};

NavbarLink.defaultProps = {
  className: '',
};

export default NavbarLink;
