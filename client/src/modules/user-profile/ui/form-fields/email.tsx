import { memo, useEffect } from 'react';

import { InputGroup } from '~shared/components';

import { useGetUserInfo } from '~services/user';

import { IUserProfileFormFieldProps } from '../types';
import { UserProfileFormFieldEnum } from '../../model';

import './styles.scss';

type Props = Pick<IUserProfileFormFieldProps, 'disabledMode' | 'registerInput' | 'initValue'>;

const UserProfileFormEmailField: React.FC<Props> = (props) => {
  const {
    disabledMode,
    initValue,
    registerInput,
  } = props;

  const { data: userData } = useGetUserInfo();
  const { email } = userData || {};

  useEffect(() => {
    if (!email) {
      return;
    }

    initValue(UserProfileFormFieldEnum.UserEmail, email );
  }, [userData]);

  return (
    <div className='user-profile-form-field'>
      <InputGroup.Text
        label={window.translate('email')}
        name={UserProfileFormFieldEnum.UserEmail}
        disabled={!(disabledMode === UserProfileFormFieldEnum.UserEmail)}
        registerProps={registerInput(UserProfileFormFieldEnum.UserEmail)}
      />
    </div>
  );
};

export default memo(UserProfileFormEmailField);
