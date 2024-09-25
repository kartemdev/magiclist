import { memo, useEffect } from 'react';

import { useGetUserInfo, useUpdateUserInfo } from '~services/user';
import { InputGroup } from '~shared/ui';

import { IUserProfileFormFieldProps } from '../types.ui';
import { IUserProfileFormData, UserProfileFormFieldEnum } from '../../model';

import UserProfileFormTools from '../form-tools';

import './index.scss';

const UserProfileFormNameField: React.FC<IUserProfileFormFieldProps> = (props) => {
  const {
    error,
    disabledMode,
    dirtyFields,
    initValue,
    onSubmitForm,
    registerInput,
    onChangeDisabledMode,
  } = props;

  const { data: userData } = useGetUserInfo();
  const [updateUserData] = useUpdateUserInfo();

  const { userName } = userData || {};

  useEffect(() => {
    if (!userName) {
      return;
    }

    initValue(UserProfileFormFieldEnum.UserName, userName);
  }, [userData]);

  const handleSubmitEditUserName = (data: IUserProfileFormData) => {
    updateUserData({
      data: {
        userName: data.userName,
      },
    });
  };

  return (
    <div className='user-profile-form-field'>
      <InputGroup.Text
        error={error}
        label={window.translate('user_name')}
        name={UserProfileFormFieldEnum.UserName}
        disabled={!(disabledMode === UserProfileFormFieldEnum.UserName)}
        registerProps={registerInput(UserProfileFormFieldEnum.UserName)}
      />
      <UserProfileFormTools
        keyFieldName={'UserName'}
        dirtyFields={dirtyFields}
        disabledMode={disabledMode}
        onChangeDisabledMode={onChangeDisabledMode}
        onApply={onSubmitForm(handleSubmitEditUserName)}
      />
    </div>
  );
};

export default memo(UserProfileFormNameField);
