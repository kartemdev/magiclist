import { selectIsVerifiedUser } from '~services/user';
import { useAppSelector } from '~shared/hooks';
import { NavbarLink } from '~shared/ui';

import { AUTH_MAIN_LINKS } from '../../model';

const AuthMain: React.FC = () => {
  const isVerifiedUser = useAppSelector(selectIsVerifiedUser);

  return (
    <>
      {AUTH_MAIN_LINKS.map(({ to, textContent }) => (
        <NavbarLink
          to={to}
          key={to}
          isDisabled={!isVerifiedUser}
          className='header-main-group__item'
        >
          {window.translate(textContent)}
        </NavbarLink>
      ))}
    </>
  );
};

export default AuthMain;
