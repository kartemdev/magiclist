import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INavigationItem } from '../types';

import './styles.scss';
import classNames from 'classnames';
interface IProps {
  groups: INavigationItem[],
}

const Navbar: React.FC<IProps> = (props) => {
  const { groups } = props;

  const location = useLocation();

  return (
    <div className='magic-navbar__block'>
      <div className='magic-navbar'>
        <Link
          to='/'
          className='magic-navbar__logo'
        >
          <span>{'MAGIC'}</span>{'List'}
        </Link>
      </div>
      <div className='magic-navbar'>
        {!!groups?.length && (groups.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={classNames('magic-navbar__item', {
              ['magic-navbar__item-location']: item.to === location.pathname,
            })}
           >
            {item.content}
          </Link>
        )))}
      </div>
    </div>
  )
};

export default Navbar;
