import React from 'react'
import { NavbarMenu } from '~shared/components';
import { useAppSelector } from '~shared/hooks';
import { selectIsAuth } from '~services/auth';
import ToolsGroup from './tools-group'
import MenuGroup from './menu-group';

const MobileGroup: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      <ToolsGroup isAuth={isAuth} />
      <NavbarMenu>
        <MenuGroup isAuth={isAuth} />
      </NavbarMenu>
    </>
  )
}

export default MobileGroup;
