import 'react-toastify/dist/ReactToastify.css';

import './layout.ui.scss';

interface IProps {
  headerSlot: React.ReactNode;
  footerSlot: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ headerSlot, footerSlot, children }) => {
  return (
    <div className='ml-layout'>
      <div className='ml-layout__header'>{headerSlot}</div>
      <div className='ml-layout__content'>{children}</div>
      <div className='ml-layout__footer'>{footerSlot}</div>
    </div>
  );
};

export default Layout;
