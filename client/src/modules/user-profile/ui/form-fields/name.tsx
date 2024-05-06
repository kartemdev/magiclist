import { memo } from 'react';

import { useUpdateUserInfo } from '~services/user';
import { InputGroup } from '~shared/components';

import UserProfileFormTools from '../form-tools';
import { IUserProfileFormFieldProps } from '../types';
import { IUserProfileFormData, UserProfileFormFieldEnum } from '../../model';

import './styles.scss';

const UserProfileFormNameField: React.FC<IUserProfileFormFieldProps> = (props) => {
  const {
    disabledMode,
    dirtyFields,
    error,
    registerInput,
    onSubmitForm,
    onChangeDisabledMode
  } = props;

  const [updateUserData] = useUpdateUserInfo();

  const handleSubmitEditUserName = (data: IUserProfileFormData) => {
    updateUserData({
      userName: data.userName
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
