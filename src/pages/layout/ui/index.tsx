import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalHeader } from '~modules/global-header';

import './styles.scss';

const LayoutPage: React.FC = () => {
  return (
    <div className='layout-page'>
      <div className='layout-page__header'>
        <GlobalHeader />
      </div>
      <div className='layout-page__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
