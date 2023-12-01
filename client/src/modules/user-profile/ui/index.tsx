import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroup, Preloader } from '~shared/components';
import { dateFormat, LocalesTags, wait } from '~shared/lib';
import { useGetUserInfo, useUpdateUserInfo } from '~services/user';
import { FieldNamesEnum, IUserProfileFormData } from '../types';
import { getErrorMessage, validationUserProfileForm } from '../lib';
import UserProfileInputTools from './input-tools';

import './styles.scss';

const UserProfile: React.FC = () => {
  const { data: userData } = useGetUserInfo();
  const [ updateUserData, { isLoading, error } ] = useUpdateUserInfo();

  const { id, userName, email, registerDate } = userData || {};

  const [disabledMode, setDisabledMode] = useState<FieldNamesEnum>(null);

  const defaultValues = useMemo(() => ({
    userName: '',
    userEmail: '',
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
      userName,
      userEmail: email,
    });
    
    setDisabledMode(null);
  }, [userData]);

  useEffect(() => {
    const errorMessage = getErrorMessage(error);

    if (errorMessage) {
      const [field, message] = errorMessage;

      setError(field as Key<typeof defaultValues>, message)
    }
  }, [error]);

  const handleChangeDisabledMode = (mode: FieldNamesEnum | null) => {
    setDisabledMode(mode);
    resetField('userName');

    if (mode !== null) {
      wait(0).then(() => {
        setFocus(mode);
      });
    }
  };

  const handleSubmitEditUserName = (data: IUserProfileFormData) => {
    updateUserData({
      userName: data.userName
    });
  };

  return (
    <div className='user-profile'>
      {isLoading && <Preloader isFullScreen />}
      <div className='user-profile__field'>
        <InputGroup.Text
          name='userName'
          label={window.translate('user_name')}
          disabled={!(disabledMode === FieldNamesEnum.USER_NAME)}
          error={errors?.userName?.message}
          registerProps={registerInput('userName')}
        />
        <UserProfileInputTools
          dirtyFields={dirtyFields}
          disabledMode={disabledMode}
          keyFieldName={'USER_NAME'}
          onApply={handleSubmitForm(handleSubmitEditUserName)}
          onChangeDisabledMode={handleChangeDisabledMode}
        />
      </div>
      <div className='user-profile__field'>
        <InputGroup.Text
          name='userEmail'
          label={window.translate('email')}
          disabled={!(disabledMode === FieldNamesEnum.USER_EMAIL)}
          registerProps={registerInput('userEmail')}
        />
      </div>
      <div className='user-profile__field'>
        <InputGroup.Text
          name='registerDate'
          value={registerDate && dateFormat(registerDate, LocalesTags.RUS)}
          label={window.translate('register_date')}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default UserProfile;
