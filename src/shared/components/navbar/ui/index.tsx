import React from 'react';

import './styles.scss';
interface IProps {
  leftGroup?: React.ReactNode;
  rightGroup: React.ReactNode;
}

const Navbar: React.FC<IProps> = (props) => {
  const { leftGroup, rightGroup } = props;

  return (
    <div className='magic-navbar__block'>
      <div className='magic-navbar magic-navbar__side-left'>
        {leftGroup}
      </div>
      <div className='magic-navbar magic-navbar__side-right'>
        {rightGroup}
      </div>
    </div>
  )
};

Navbar.defaultProps = {
  leftGroup: null,
  rightGroup: null,
}

export default Navbar;
