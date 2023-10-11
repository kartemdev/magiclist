import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalHeader } from '~modules/global-header';
import { ToastContainer } from 'react-toastify';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const LayoutPage: React.FC = () => {
  return (
    <div className='layout-page'>
      <ToastContainer />
      <div className='layout-page__global-header'>
        <GlobalHeader />
      </div>
      <div className='layout-page__content'>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
