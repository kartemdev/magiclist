import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Form,
  Button,
  Preloader,
  DateTimer,
  InputGroup,
  DateTimerTypesEnum,
} from '~shared/components';
import {
  useGetVerifie,
  useVerifieUser,
  useGetUserInfo,
  useUpdateUserInfo,
} from '~services/user';
import { matchErrorMessage } from '~shared/lib';
import { useCountDownDate } from '~shared/hooks';

import {
  CHANGE_EMAIL_FORM_ERRORS,
  validationChangeEmailForm,
  ChangeEmailFormFieldsEnum,
  type IChangeEmailFormData,
  MINUTES_BLOCKED_SEND_VERIFIE,
} from '../../model';

import './styles.scss';

interface IProps {
  onSuccess: () => void;
}

const UserVerifieChangeEmailForm: React.FC<IProps> = ({ onSuccess }) => {
  const { data: userData } = useGetUserInfo();
  const { data: verifieUserData } = useGetVerifie();
  const [updateUserData, { error, isLoading: isLoadingUpdateUserInfo, isSuccess }] = useUpdateUserInfo();
  const [verifieUser, { isLoading: isLoadingVerifieUser }] = useVerifieUser();

  const countDownValues = useCountDownDate(
    (verifieUserData?.verifieCreatedTime || 0) + 60 * MINUTES_BLOCKED_SEND_VERIFIE * 1000
  );

  const { minutes, seconds } = countDownValues;
  const isAllowedSendCode = minutes + seconds <= 0;
  const isLoading = isLoadingUpdateUserInfo || isLoadingVerifieUser;

  const defaultValues = useMemo(() => ({ changedEmail: '' }), []);

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
    if (isSuccess) {
      onSuccess();
      verifieUser(null);
    }
  }, [isSuccess])

  useEffect(() => {
    resetForm({ changedEmail: userData.email });
  }, [userData])

  useEffect(() => {
    const errorMessage = matchErrorMessage(error, CHANGE_EMAIL_FORM_ERRORS);

    if (errorMessage) {
      const [field, message] = errorMessage;
      setError(field as Key<typeof defaultValues>, message)
    }
  }, [error]);

  const handleSubmitUpdateUserData = (data: IChangeEmailFormData) => {
    const payload = { email: data.changedEmail };

    if (!dirtyFields[ChangeEmailFormFieldsEnum.ChangedEmail]) {
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
        name='changedEmail'
        error={errors?.changedEmail?.message}
        registerProps={regitsterInput('changedEmail')}
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
