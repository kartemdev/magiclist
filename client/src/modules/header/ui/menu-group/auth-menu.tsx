import { selectIsVerifiedUser } from '~services/user';
import { useAppSelector } from '~shared/hooks';
import { NavbarLink } from '~shared/components';

import { AUTH_MAIN_LINKS } from '../../model';

const AuthMenu: React.FC = () => {
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);

  return (
    <>
      {AUTH_MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink
          to={to}
          key={to}
          isDisabled={!isVerifiedUser}
          className='header-menu-group__body_item'
        >
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMenu;
