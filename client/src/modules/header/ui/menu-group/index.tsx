import { LangsSelector } from '~components/langs-selector';

import AuthMenu from './auth-menu.ui';

import './index.scss';

interface IProps {
  isAuth: boolean;
}

const MenuGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='header-menu-group'>
      <div className='header-menu-group__body'>{isAuth && <AuthMenu />}</div>
      <div className='header-menu-group__footer'>
        <LangsSelector isTopPlacementMenu />
      </div>
    </div>
  );
};

export default MenuGroup;
