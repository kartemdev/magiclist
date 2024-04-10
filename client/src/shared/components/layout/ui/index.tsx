import { Outlet } from 'react-router-dom';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  headerSlot: React.ReactNode;
  footerSlot: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ headerSlot, footerSlot }) => {
  return (
    <div className='ml-layout'>
      <div className='ml-layout__header'>{headerSlot}</div>
      <div className='ml-layout__content'><Outlet /></div>
      <div className='ml-layout__footer'>{footerSlot}</div>
    </div>
  );
};

export default Layout;
