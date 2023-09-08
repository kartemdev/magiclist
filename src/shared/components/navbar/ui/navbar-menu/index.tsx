import React, { useRef, useState } from 'react'
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { ClosedBurgerMenuIcon, OpenedBurgerMenuIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  children: React.ReactNode;
  leftSide?: React.ReactNode;
}

const NavbarMenu: React.FC<IProps> = ({ children, leftSide }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuRef = useRef(null);

  return (
    <div className={classNames('magic-navbar-menu__block', {
      ['magic-navbar-menu__block-left']: leftSide,
    })}>
      <div
        className='magic-navbar-menu__button'
        onClick={() => setIsOpenMenu((prevState) => !prevState)}
      >
        {isOpenMenu ? (
          <OpenedBurgerMenuIcon
            className='magic-navbar-menu__button-icon'
          />
        ) : (
          <ClosedBurgerMenuIcon
            className='magic-navbar-menu__button-icon'
          />
        )}
      </div>
      <CSSTransition
        in={isOpenMenu}
        nodeRef={menuRef}
        timeout={400}
        unmountOnExit
        classNames='magic-navbar-menu'
      >
        <div className='magic-navbar-menu' ref={menuRef}>
          {children}
        </div>
      </CSSTransition>
  </div>
  );
};

export default NavbarMenu;
