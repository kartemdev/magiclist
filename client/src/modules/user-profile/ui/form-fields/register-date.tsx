import { memo } from 'react';

import { InputGroup } from '~shared/components';
import { IUserInfoResponseDTO } from '~shared/api';
import { LocalesTags, dateFormat } from '~shared/lib';

import './styles.scss';

interface IProps {
  value: IUserInfoResponseDTO['registerDate'];
};

const UserProfileFormRegisterDateField: React.FC<IProps> = (props) => {
  const { value } = props;

  return (
    <div className='user-profile-form-field'>
      <InputGroup.Text
        disabled
        name='registerDate'
        value={value && dateFormat(value, LocalesTags.RUS)}
        label={window.translate('register_date')}
      />
    </div>
  );
};

export default memo(UserProfileFormRegisterDateField);
