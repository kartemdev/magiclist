import ProfielUserPage from './profile-user';

import './index.scss';

const ProfilePage: React.FC = () => {
  return (
    <div className='profile-page'>
      <div className='profile-page__wrapper'>
        <div className='profile-page__title'>{window.translate('profile_page_title')}</div>
        <ProfielUserPage />
      </div>
    </div>
  );
};

export default ProfilePage;
