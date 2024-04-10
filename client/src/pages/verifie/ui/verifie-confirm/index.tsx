import { useNavigate } from 'react-router-dom';

import { UserVerifieConfirmCode, UserVerifieSendCode } from '~modules/user-verifie';
import { Button } from '~shared/components';

import './styles.scss';

const VerifieConfirmPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateChangeEmail = () => {
    navigate('/verifie/email');
  }

  return (
    <div className='verifie-confirm-page'>
      <div className='verifie-confirm-page__title'>
        {window.translate('verifie_confirm_page_title')}
      </div>
      <div className='verifie-confirm-page__wrapper'>
        <UserVerifieConfirmCode />
        <div className='verifie-confirm-page__tools'>
          <UserVerifieSendCode />
          <Button onClick={handleNavigateChangeEmail}>
            {window.translate('verifie_confirm_page_handle_change_email')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifieConfirmPage;
