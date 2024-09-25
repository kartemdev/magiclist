import { LoginUserIcon } from '~shared/assets';
import { NavbarLink } from '~shared/ui';

const GuestTools: React.FC = () => {
  return (
    <>
      <NavbarLink to='auth' className='header-tools-group__item header-tools-group__login'>
        <LoginUserIcon className='header-tools-group__login_icon' />
      </NavbarLink>
    </>
  );
};

export default GuestTools;
