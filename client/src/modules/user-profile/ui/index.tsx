import { useEffect, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useGetUserInfo, useUpdateUserInfo } from '~services/user';
import { InputGroup, Preloader } from '~shared/components';
import { dateFormat, LocalesTags, matchErrorMessage, wait } from '~shared/lib';

import {
  IUserProfileFormData,
  USER_PROFILE_FORM_ERRORS,
  UserProfileFormFieldEnum,
  validationUserProfileForm
} from '../model';
import UserProfileInputTools from './input-tools';

import './styles.scss';

const UserProfile: React.FC = () => {
  const { data: userData } = useGetUserInfo();
  const [ updateUserData, { isLoading, error } ] = useUpdateUserInfo();

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

  const handleChangeDisabledMode = async (mode: UserProfileFormFieldEnum | null) => {
    setDisabledMode(mode);
    resetField(mode);

    if (mode !== null) {
      await wait(0);
      setFocus(mode);
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
          name={UserProfileFormFieldEnum.UserName}
          label={window.translate('user_name')}
          disabled={!(disabledMode === UserProfileFormFieldEnum.UserName)}
          error={errors?.userName?.message}
          registerProps={registerInput(UserProfileFormFieldEnum.UserName)}
        />
        <UserProfileInputTools
          dirtyFields={dirtyFields}
          disabledMode={disabledMode}
          keyFieldName={'UserName'}
          onApply={handleSubmitForm(handleSubmitEditUserName)}
          onChangeDisabledMode={handleChangeDisabledMode}
        />
      </div>
      <div className='user-profile__field'>
        <InputGroup.Text
          name={UserProfileFormFieldEnum.UserEmail}
          label={window.translate('email')}
          disabled={!(disabledMode === UserProfileFormFieldEnum.UserEmail)}
          registerProps={registerInput(UserProfileFormFieldEnum.UserEmail)}
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
