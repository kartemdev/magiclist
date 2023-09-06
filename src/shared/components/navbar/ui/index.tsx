import React from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import NavbarMenu from './navbar-menu';
import { INavigationItem } from '../types';

import './styles.scss';
interface IProps {
  logo?: React.ReactNode;
  groups: INavigationItem[],
  footerMenu?: React.ReactNode,
}

const Navbar: React.FC<IProps> = (props) => {
  const { logo, groups, footerMenu } = props;

  const location = useLocation();

  return (
    <div className='magic-navbar__block'>
      <div className='magic-navbar magic-navbar__side-left'>
        <Link
          to='/'
          className='magic-navbar__logo'
        >
          {logo}
        </Link>
      </div>
      <div className='magic-navbar magic-navbar__side-right'>
        <MediaQuery minWidth={769}>
          {!!groups?.length && (groups.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={classNames('magic-navbar__item', {
                ['magic-navbar__item-location']: item.to === location.pathname,
                [`magic-navbar__item-${item.name}`]: !!item.name,
                [`magic-navbar__item-${item.name}-location`]: !!item.name && item.to === location.pathname,
              })}
            >
              {item.content}
            </Link>
          )))}
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <NavbarMenu groups={groups} footerMenu={footerMenu} />
        </MediaQuery>
      </div>
    </div>
  )
};

Navbar.defaultProps = {
  footerMenu: null,
}

export default Navbar;
