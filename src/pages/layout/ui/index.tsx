import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalNavigation } from '~modules/header';

import './styles.scss';

const LayoutPage: React.FC = () => {
  return (
    <div className='layout-page'>
      <div className='layout-page__navigation'>
        <GlobalNavigation />
      </div>
      <div className='layout-page__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
