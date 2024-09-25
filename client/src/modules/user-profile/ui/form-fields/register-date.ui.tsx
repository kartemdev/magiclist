import { memo } from 'react';

import { InputGroup } from '~shared/ui';
import { LocalesTags, dateFormat } from '~shared/lib';
import { useGetUserInfo } from '~services/user';

import './index.scss';

const UserProfileFormRegisterDateField: React.FC = () => {
  const { data: userData } = useGetUserInfo();
  const { registerDate } = userData || {};

  return (
    <div className='user-profile-form-field'>
      <InputGroup.Text
        disabled
        name='registerDate'
        label={window.translate('register_date')}
        value={registerDate && dateFormat(registerDate, LocalesTags.RUS)}
      />
    </div>
  );
};

export default memo(UserProfileFormRegisterDateField);
