import React from 'react';
import AuthMain from './auth-main';

import './styles.scss';

interface IProps {
  isAuth: boolean;
}

const MainGroup: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className='header-main-group'>
      {isAuth && <AuthMain />}
    </div>
  );
};

export default MainGroup;
