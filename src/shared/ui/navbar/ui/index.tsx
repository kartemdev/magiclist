import React from 'react';

import './styles.scss';
interface IProps {
  leftGroup?: React.ReactNode;
  rightGroup: React.ReactNode;
}

const Navbar: React.FC<IProps> = (props) => {
  const { leftGroup, rightGroup } = props;

  return (
    <div className='ml-navbar__block'>
      <div className='ml-navbar ml-navbar__side-left'>
        {leftGroup}
      </div>
      <div className='ml-navbar ml-navbar__side-right'>
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
