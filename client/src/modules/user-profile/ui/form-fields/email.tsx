import { memo } from 'react';

import { InputGroup } from '~shared/components';

import { IUserProfileFormFieldProps } from '../types';
import { UserProfileFormFieldEnum } from '../../model';

import './styles.scss';

type Props = Pick<IUserProfileFormFieldProps, 'disabledMode' | 'registerInput'>;

const UserProfileFormEmailField: React.FC<Props> = (props) => {
  const {
    disabledMode,
    registerInput,
  } = props;

  return (
    <div className='user-profile-form-field'>
      <InputGroup.Text
        name={UserProfileFormFieldEnum.UserEmail}
        label={window.translate('email')}
        disabled={!(disabledMode === UserProfileFormFieldEnum.UserEmail)}
        registerProps={registerInput(UserProfileFormFieldEnum.UserEmail)}
      />
    </div>
  );
};

export default memo(UserProfileFormEmailField);
