import { useNavigate } from 'react-router-dom';

import { PageNotFoundIcon } from '~shared/assets';

import { Button } from '~shared/components';

import './styles.scss';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found-page'>
      <PageNotFoundIcon className='not-found-page__icon' />
      <div className='not-found-page__text'>
        {window.translate('page_not_found')}
      </div>

      <Button onClick={() => navigate('/')}>
        {window.translate('not_found_page_back_to_home')}
      </Button>
    </div>
  );
};

NotFoundPage.defaultProps = {
  content: '',
};

export default NotFoundPage;
