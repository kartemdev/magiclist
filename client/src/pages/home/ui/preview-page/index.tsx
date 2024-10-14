import { useNavigate } from 'react-router-dom';

import { Button } from '~shared/ui';

import './index.scss';

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='home-page-preview'>
        <div className='home-page-preview__logo-back' />
        <div className='home-page-preview__logo'>
          <span className='home-page-preview__logo-item' />
          <span className='home-page-preview__logo-item' />
        </div>
        <Button onClick={() => navigate('/auth/register')}>{window.translate('begin')}</Button>
        <div className='home-page-preview__slogan'>
          <span className='home-page-preview__slogan-item'>{`${window.translate('home_preview_page_slogan_first')}.`}</span>
          <span className='home-page-preview__slogan-item'>{`${window.translate('home_preview_page_slogan_second')}.`}</span>
          <span className='home-page-preview__slogan-item'>{`${window.translate('home_preview_page_slogan_third')}.`}</span>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;
