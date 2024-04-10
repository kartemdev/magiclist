import { selectIsAuth } from '~services/auth';
import { selectIsVerifiedUser } from '~services/user';
import { ListIcon } from '~shared/assets';
import { NavbarLink } from '~shared/components';
import { useAppSelector } from '~shared/hooks';

import './styles.scss';

const LogoGroup: React.FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);

  return (
    <div className='header-logo-group'>
      <NavbarLink
        to='/'
        isDisabled={isAuth && !isVerifiedUser}
        className='header-logo-group__link'
      >
        <div className='header-logo-group__wrapper'>
          <ListIcon className='header-logo-group__icon'/>
          <span className='header-logo-group__title'>Magic list</span>
        </div>
      </NavbarLink>
    </div>
  );
};

export default LogoGroup;
