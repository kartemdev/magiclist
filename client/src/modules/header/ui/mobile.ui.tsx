import { selectIsAuth } from '~services/auth';
import { NavbarMenu } from '~shared/ui';
import { useAppSelector } from '~shared/hooks';

import ToolsGroup from './tools-group';
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
  );
};

export default MobileGroup;
