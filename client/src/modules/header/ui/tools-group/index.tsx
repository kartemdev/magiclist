import React from 'react';
import AuthTools from './auth-tools';
import GuestTools from './guest-tools';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const ToolsGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='header-tools-group'>
      {isAuth ? <AuthTools /> : <GuestTools /> }
    </div>
  );
};

export default ToolsGroup;
