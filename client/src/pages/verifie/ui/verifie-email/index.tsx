import { useNavigate } from 'react-router-dom';

import { UserVerifieChangeEmailForm } from '~modules/user-verifie';
import { Button } from '~shared/ui';

import './index.scss';

const VerifieEmailPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/verifie/confirm');
  };

  return (
    <div className='verifie-email-page'>
      <div className='verifie-email-page__title'>
        {window.translate('verifie_email_page_title')}
      </div>
      <div className='verifie-email-page__wrapper'>
        <UserVerifieChangeEmailForm onSuccess={handleBack} />
        <Button onClick={handleBack}>{window.translate('verifie_email_page_handle_back')}</Button>
      </div>
    </div>
  );
};

export default VerifieEmailPage;
