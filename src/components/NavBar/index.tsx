import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface NavigationItem {
  to: string;
  content: React.ReactNode;
}

interface IProps {
  groups: NavigationItem[],
}

const NavBar: React.FC<IProps> = (props) => {
  const {  groups } = props;

  return (
    <div className='magic-navbar__block'>
      <div className='magic-navbar'>
        <Link to='/' className='magic-navbar__logo'><span>MAGIC</span>List</Link>
      </div>
      <div className='magic-navbar'>
        {!!groups?.length && (groups.map((item) => (
          <Link to={item.to} className='magic-navbar__item'>{item.content}</Link>
        )))}
      </div>
    </div>
  )
}

export default NavBar;