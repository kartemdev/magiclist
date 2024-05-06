import classNames from 'classnames';

import { useAppSelector, useCountDownDate } from '~shared/hooks';
import { selectVerifieCreatedTime, useInitialVerifie } from '~services/user'
import { Button, DateTimer, DateTimerTypesEnum, Preloader } from '~shared/components';

import { MINUTES_BLOCKED_SEND_VERIFIE } from '../../model';

import './styles.scss';

const UserVerifieSendCode: React.FC = () => {
  const [verifie, { isLoading }] = useInitialVerifie();

  const verifieCreatedTime = useAppSelector(selectVerifieCreatedTime);
  
  const sendCodeTimeStamp = (verifieCreatedTime || 0) + 60 * MINUTES_BLOCKED_SEND_VERIFIE * 1000;
  const countDownValues = useCountDownDate(sendCodeTimeStamp);
  const { minutes, seconds } = countDownValues;

  const isAllowedSendCode = minutes + seconds <= 0;
  const isBlockedSendCode = sendCodeTimeStamp - new Date().getTime() > 0;

  const handeSubmitSendCode = () => {
    verifie(null);
  };

  const renderPerloader = () => (
    isLoading && <Preloader size={30} thickness={5} typeStyle='secondary'/>
  );

  return (
    <div className='user-verifie-send-code'>
      <Button
        className={classNames('user-verifie-send-code__submit', {
          ['user-verifie-send-code__allowed']: isAllowedSendCode,
        })}
        isDisabled={isLoading || isBlockedSendCode}
        onClick={handeSubmitSendCode}
      >
        {isAllowedSendCode ? (
          renderPerloader() || window.translate('user_verifie_handle_send_code')
        ) : (
          <DateTimer type={DateTimerTypesEnum.Minute} payloadValues={countDownValues} />
        )}
      </Button>
    </div>
  );
};

export default UserVerifieSendCode;
