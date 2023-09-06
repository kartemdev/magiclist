import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalNavigation } from '~modules/header';

const LayoutPage: React.FC = () => {
  return (
    <div className='layout-page'>
      <GlobalNavigation />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
