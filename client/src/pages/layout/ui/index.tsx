import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '~modules/header';
import { Footer } from '~modules/footer';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const LayoutPage: React.FC = () => {
  return (
    <div className='layout-page'>
      <ToastContainer />
      <div className='layout-page__header'>
        <Header />
      </div>
      <div className='layout-page__content'>
        <Outlet />
      </div>
      <div className='layout-page__footer'>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutPage;
