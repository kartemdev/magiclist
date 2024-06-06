import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  useInitialVerifie,
  useGetUserInfo,
  useUpdateUserInfo,
  selectVerifieCreatedTime,
} from '~services/user';
import {
  Form,
  Button,
  Preloader,
  DateTimer,
  InputGroup,
  DateTimerTypesEnum,
} from '~shared/components';
import { matchErrorMessage } from '~shared/lib';
import { useAppSelector, useCountDownDate } from '~shared/hooks';

import {
  CHANGE_EMAIL_FORM_ERRORS,
  validationChangeEmailForm,
  ChangeEmailFormFieldEnum,
  type IChangeEmailFormData,
  MINUTES_BLOCKED_SEND_VERIFIE,
} from '../../model';

import './styles.scss';

interface IProps {
  onSuccess: () => void;
}

const UserVerifieChangeEmailForm: React.FC<IProps> = ({ onSuccess }) => {
  const { data: userData } = useGetUserInfo();
  const [verifie, { isLoading: isLoadingVerifieUser }] = useInitialVerifie();
  const [updateUserData, { error, isLoading: isLoadingUpdateUserInfo, isSuccess }] = useUpdateUserInfo();

  const verifieCreatedTime = useAppSelector(selectVerifieCreatedTime);

  const countDownValues = useCountDownDate(
    (verifieCreatedTime || 0) + 60 * MINUTES_BLOCKED_SEND_VERIFIE * 1000
  );

  const { minutes, seconds } = countDownValues;
  const isAllowedSendCode = minutes + seconds <= 0;
  const isLoading = isLoadingUpdateUserInfo || isLoadingVerifieUser;

  const defaultValues = useMemo(() => ({ [ChangeEmailFormFieldEnum.ChangedEmail]: '' }), []);

  const {
    handleSubmit,
    reset: resetForm,
    register: regitsterInput,
    formState: { errors, dirtyFields },
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationChangeEmailForm())
  });

  useEffect(() => {
    resetForm({ [ChangeEmailFormFieldEnum.ChangedEmail]: userData.email });
  }, [userData])

  useEffect(() => {
    const errorMessage = matchErrorMessage<IChangeEmailFormData>(error, CHANGE_EMAIL_FORM_ERRORS);

    if (errorMessage) {
      setError(...errorMessage)
    }
  }, [error]);

  const handleSuccessUpdateUser = () => {
    onSuccess();
    verifie(null);
  }

  const handleSubmitUpdateUserData = (data: IChangeEmailFormData) => {
    const payload = {
      onSuccess: handleSuccessUpdateUser,
      data: {
        email: data.changedEmail
      }
    };

    if (!dirtyFields[ChangeEmailFormFieldEnum.ChangedEmail]) {
      onSuccess();
      return;
    }

    updateUserData(payload);
  };

  const renderPreloader = () => (
    isLoading && <Preloader size={30} thickness={5} typeStyle='secondary'/>
  );

  return (
    <Form
      className='user-verifie-change-email-form'
      onSubmit={handleSubmit(handleSubmitUpdateUserData)}
    >
      <InputGroup.Text
        name={ChangeEmailFormFieldEnum.ChangedEmail}
        error={window.translate(errors.changedEmail?.message)}
        registerProps={regitsterInput(ChangeEmailFormFieldEnum.ChangedEmail)}
      />
      <Button
        type='submit'
        isDisabled={isLoading || !isAllowedSendCode}
      >
        {(renderPreloader() || isAllowedSendCode) ? (
          window.translate('user_verifie_handle_change_email_form')
        ) : (
          <DateTimer type={DateTimerTypesEnum.Minute} payloadValues={countDownValues} />
        )}
      </Button>
    </Form>
  )
}

export default UserVerifieChangeEmailForm;
