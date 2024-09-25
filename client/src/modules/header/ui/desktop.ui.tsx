import { selectIsAuth } from '~services/auth';
import { useAppSelector } from '~shared/hooks';

import MainGroup from './main-group';
import ToolsGroup from './tools-group';

const DesktopGroup: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      <MainGroup isAuth={isAuth} />
      <ToolsGroup isAuth={isAuth} />
    </>
  );
};

export default DesktopGroup;
