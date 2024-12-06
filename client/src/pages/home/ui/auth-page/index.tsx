import { Link } from 'react-router-dom';

import { PreviewLogo } from '~components/preview-logo';

import './index.scss';

const HomeAuthPage = () => {
  return (
    <div className='home-auth-page'>
      <PreviewLogo />
      <h2 className='home-auth-page__title'>{window.translate('home_auth_page_title')}</h2>
      <section className='home-auth-page__menu-list'>
        <Link to='profile' className='home-auth-page__menu-item'>
          {window.translate('home_auth_page_profile_link')}
        </Link>
        <Link to='residues' className='home-auth-page__menu-item'>
          {window.translate('home_auth_page_residues_link')}
        </Link>
      </section>
    </div>
  );
};

export default HomeAuthPage;
