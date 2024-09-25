import AuthTools from './auth-tools.ui';
import GuestTools from './guest-tools.ui';

import './index.scss';

interface IProps {
  isAuth: boolean;
}

const ToolsGroup: React.FC<IProps> = ({ isAuth }) => {
  return <div className='header-tools-group'>{isAuth ? <AuthTools /> : <GuestTools />}</div>;
};

export default ToolsGroup;
