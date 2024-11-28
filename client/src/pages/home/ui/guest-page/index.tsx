import { useNavigate } from 'react-router-dom';

import { Button } from '~shared/ui';

import { PreviewLogo } from '~components/preview-logo';

import './index.scss';

const HomeGuestPage = () => {
  const navigate = useNavigate();

  return (
    <div className='home-guest-page'>
      <PreviewLogo />
      <Button onClick={() => navigate('/auth/register')}>{window.translate('begin')}</Button>
      <div className='home-guest-page__slogan'>
        <span className='home-guest-page__slogan-item'>{`${window.translate('home_preview_page_slogan_first')}.`}</span>
        <span className='home-guest-page__slogan-item'>{`${window.translate('home_preview_page_slogan_second')}.`}</span>
        <span className='home-guest-page__slogan-item'>{`${window.translate('home_preview_page_slogan_third')}.`}</span>
      </div>
    </div>
  );
};

export default HomeGuestPage;
