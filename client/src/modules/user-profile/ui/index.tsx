import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Form, Preloader } from '~shared/ui';
import { matchErrorMessage, wait } from '~shared/lib';
import { useGetUserInfo, useUpdateUserInfo } from '~services/user';

import {
  IUserProfileFormData,
  USER_PROFILE_FORM_ERRORS,
  UserProfileFormFieldEnum,
  validationUserProfileForm,
} from '../model';
import { UserProfileFormFields } from './form-fields';

import './index.scss';

const UserProfileForm: React.FC = () => {
  const { data: userData } = useGetUserInfo();
  const [_, { isLoading, error }] = useUpdateUserInfo();

  const { id, userName, email } = userData || {};

  const [disabledMode, setDisabledMode] = useState<UserProfileFormFieldEnum>(null);

  const defaultValues = useMemo(
    () => ({
      [UserProfileFormFieldEnum.UserName]: '',
      [UserProfileFormFieldEnum.UserEmail]: '',
    }),
    [],
  );

  const {
    reset,
    setError,
    setFocus,
    setValue,
    resetField,
    formState: { dirtyFields, errors },
    register: registerInput,
    handleSubmit: handleSubmitForm,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationUserProfileForm()),
  });

  useEffect(() => {
    if (!id) {
      return;
    }

    reset({
      [UserProfileFormFieldEnum.UserName]: userName,
      [UserProfileFormFieldEnum.UserEmail]: email,
    });

    setDisabledMode(null);
  }, [userData]);

  useEffect(() => {
    const errorMessage = matchErrorMessage<IUserProfileFormData>(error, USER_PROFILE_FORM_ERRORS);

    if (errorMessage) {
      setError(...errorMessage);
    }
  }, [error]);

  const handleChangeDisabledMode = async (currentField: UserProfileFormFieldEnum) => {
    setDisabledMode(disabledMode === currentField ? null : currentField);
    resetField(currentField);

    await wait(0);
    setFocus(currentField);
  };

  return (
    <Form className='user-profile-form'>
      {isLoading && <Preloader isFullScreen />}

      <UserProfileFormFields.Name
        initValue={setValue}
        dirtyFields={dirtyFields}
        disabledMode={disabledMode}
        registerInput={registerInput}
        onSubmitForm={handleSubmitForm}
        onChangeDisabledMode={handleChangeDisabledMode}
        error={window.translate(errors.userName?.message)}
      />
      <UserProfileFormFields.Email
        initValue={setValue}
        disabledMode={disabledMode}
        registerInput={registerInput}
      />
      <UserProfileFormFields.RegisterDate />
    </Form>
  );
};

export default UserProfileForm;
