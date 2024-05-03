import classNames from 'classnames';

import { useAppSelector, useCountDownDate } from '~shared/hooks';
import { selectVerifieCreatedTime, useVerifieUser } from '~services/user'
import { Button, DateTimer, DateTimerTypesEnum, Preloader } from '~shared/components';

import { MINUTES_BLOCKED_SEND_VERIFIE } from '../../model';

import './styles.scss';

const UserVerifieSendCode: React.FC = () => {
  const [verifieUser, { isLoading }] = useVerifieUser();

  const verifieCreatedTime = useAppSelector(selectVerifieCreatedTime);
  
  const sendCodeTimeStamp = (verifieCreatedTime || 0) + 60 * MINUTES_BLOCKED_SEND_VERIFIE * 1000;
  const isBlockedSendCode = sendCodeTimeStamp - new Date().getTime() > 0;
  const countDownValues = useCountDownDate(sendCodeTimeStamp);
  const { minutes, seconds } = countDownValues;

  const handeSubmitSendCode = () => {
    verifieUser(null);
  };

  const renderPreloader = () => (
    isLoading && <Preloader size={30} thickness={5} typeStyle='secondary'/>
  );

  return (
    <div className='user-verifie-send-code'>
      <Button
        className={classNames('user-verifie-send-code__submit', {
          ['user-verifie-send-code__allowed']: !isBlockedSendCode,
        })}
        isDisabled={isLoading || isBlockedSendCode}
        onClick={handeSubmitSendCode}
      >
        {(renderPreloader() || minutes + seconds <= 0) ? (
          window.translate('user_verifie_handle_send_code')
        ) : (
          <DateTimer type={DateTimerTypesEnum.Minute} payloadValues={countDownValues} />
        )}
      </Button>
    </div>
  );
};

export default UserVerifieSendCode;
