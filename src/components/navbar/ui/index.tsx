import React from 'react';
import { Link } from 'react-router-dom';
import { INavigationItem } from '../domain';

import './styles.scss';
interface IProps {
  groups: INavigationItem[],
}

const Navbar: React.FC<IProps> = (props) => {
  const {  groups } = props;

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
            className='magic-navbar__item'
           >
            {item.content}
          </Link>
        )))}
      </div>
    </div>
  )
};

export default Navbar;
