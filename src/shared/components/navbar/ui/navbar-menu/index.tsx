import classNames from 'classnames';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ClosedBurgerMenuIcon, OpenedBurgerMenuIcon } from '~shared/assets';
import { useOutsideClick } from '~shared/hooks';
import { INavigationItem } from '../../types';

import './styles.scss';

interface IProps {
  groups: INavigationItem[];
  footerMenu?: React.ReactNode;
};

const NavbarMenu: React.FC<IProps> = ({ groups, footerMenu }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setIsOpenMenu(false));

  return (
    <div className='magic-navbar-menu__block'>
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
        <div className='magic-navbar-menu__body'>
          {!!groups?.length && (groups.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={classNames('magic-navbar-menu__item', {
                ['magic-navbar-menu__item-location']: item.to === location.pathname,
                [`magic-navbar-menu__item-${item.name}`]: !!item.name,
                [`magic-navbar-menu__item-${item.name}-location`]: !!item.name && item.to === location.pathname,
              })}
            >
              {item.content}
            </Link>
          )))}
        </div>

        {footerMenu && (
          <div className='magic-navbar-menu__footer'>
            {footerMenu}
          </div>
        )}
      </div>
      </CSSTransition>
  </div>
  )
}

export default NavbarMenu;
