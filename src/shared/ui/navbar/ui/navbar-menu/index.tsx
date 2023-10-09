import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '~shared/hooks';
import { ClosedBurgerMenuIcon, OpenedBurgerMenuIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  children: React.ReactNode;
  leftSide?: React.ReactNode;
}

const NavbarMenu: React.FC<IProps> = ({ children, leftSide }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setIsOpenMenu(false));
  
  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <div className={classNames('ml-navbar-menu__block', {
      ['ml-navbar-menu__block-left']: leftSide,
    })}>
      <div
        className='ml-navbar-menu__button'
        onClick={() => setIsOpenMenu((prevState) => !prevState)}
      >
        {isOpenMenu ? (
          <OpenedBurgerMenuIcon
            className='ml-navbar-menu__button-icon'
          />
        ) : (
          <ClosedBurgerMenuIcon
            className='ml-navbar-menu__button-icon'
          />
        )}
      </div>
      <CSSTransition
        in={isOpenMenu}
        nodeRef={menuRef}
        timeout={400}
        unmountOnExit
        classNames='ml-navbar-menu'
      >
        <div className='ml-navbar-menu' ref={menuRef}>
          {children}
        </div>
      </CSSTransition>
  </div>
  );
};

export default NavbarMenu;
