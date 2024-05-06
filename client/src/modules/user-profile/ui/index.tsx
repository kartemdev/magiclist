import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useGetUserInfo, useUpdateUserInfo } from '~services/user';
import { Form, InputGroup, Preloader } from '~shared/components';
import { dateFormat, LocalesTags, matchErrorMessage, wait } from '~shared/lib';

import {
  IUserProfileFormData,
  USER_PROFILE_FORM_ERRORS,
  UserProfileFormFieldEnum,
  validationUserProfileForm
} from '../model';

import './styles.scss';
import { UserProfileFormFields } from './form-fields';

const UserProfileForm: React.FC = () => {
  const { data: userData } = useGetUserInfo();
  const [_, { isLoading, error }] = useUpdateUserInfo();

  const { id, userName, email, registerDate } = userData || {};

  const [disabledMode, setDisabledMode] = useState<UserProfileFormFieldEnum>(null);

  const defaultValues = useMemo(() => ({
    [UserProfileFormFieldEnum.UserName]: '',
    [UserProfileFormFieldEnum.UserEmail]: '',
  }), []);

  const {
    reset,
    setError,
    setFocus,
    resetField,
    formState: { dirtyFields, errors },
    register: registerInput,
    handleSubmit: handleSubmitForm
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
        error={errors?.userName?.message}
        dirtyFields={dirtyFields}
        disabledMode={disabledMode}
        registerInput={registerInput}
        onSubmitForm={handleSubmitForm}
        onChangeDisabledMode={handleChangeDisabledMode}
      />
      <UserProfileFormFields.Email disabledMode={disabledMode} registerInput={registerInput} />
      <UserProfileFormFields.RegisterDate value={registerDate} />
    </Form>
  );
};

export default UserProfileForm;
