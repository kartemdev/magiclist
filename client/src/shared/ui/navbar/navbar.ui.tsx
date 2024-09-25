import './navbar.ui.scss';

interface IProps {
  leftGroup?: React.ReactNode;
  rightGroup: React.ReactNode;
}

const Navbar: React.FC<IProps> = (props) => {
  const { leftGroup = null, rightGroup = null } = props;

  return (
    <div className='ml-navbar__block'>
      <div className='ml-navbar ml-navbar__side-left'>{leftGroup}</div>
      <div className='ml-navbar ml-navbar__side-right'>{rightGroup}</div>
    </div>
  );
};

export default Navbar;
