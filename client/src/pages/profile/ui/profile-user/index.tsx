import { UserProfileForm } from '~modules/user-profile';

import './index.scss';

const ProfielUserPage: React.FC = () => {
  return (
    <div className='profile-user-page'>
      <div className='profile-user-page__title'>{window.translate('profile_user_page_title')}</div>
      <div className='profile-user-page__form'>
        <UserProfileForm />
      </div>
    </div>
  );
};

export default ProfielUserPage;
