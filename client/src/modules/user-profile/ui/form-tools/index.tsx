import { CheckIcon, CrossCancelIcon, EditPenIcon } from '~shared/assets';

import { UserProfileFormDirtyFields, UserProfileFormFieldEnum } from '../../model';

import './index.scss';

interface IProps {
  onApply: () => void;
  dirtyFields?: UserProfileFormDirtyFields;
  disabledMode?: UserProfileFormFieldEnum;
  keyFieldName?: Key<typeof UserProfileFormFieldEnum>;
  onChangeDisabledMode?: (mode: UserProfileFormFieldEnum) => void;
}

const UserProfileFormTools: React.FC<IProps> = (props) => {
  const { onApply, dirtyFields, disabledMode, keyFieldName, onChangeDisabledMode } = props;

  const currentField = UserProfileFormFieldEnum[keyFieldName];

  const handleChangeDisabledMode = () => {
    onChangeDisabledMode(currentField);
  };

  const renderEditorButtonContent = () =>
    disabledMode === currentField ? (
      <CrossCancelIcon className='user-profile-input-tools__editor_icon-cross' />
    ) : (
      <EditPenIcon className='user-profile-input-tools__editor_icon-pen' />
    );

  return (
    <div className='user-profile-input-tools'>
      {dirtyFields[currentField] && (
        <button type='submit' onClick={onApply} className='user-profile-input-tools__apply'>
          <CheckIcon className='user-profile-input-tools__apply_icon-check' />
        </button>
      )}
      <button
        type='button'
        onClick={handleChangeDisabledMode}
        className='user-profile-input-tools__editor'
      >
        {renderEditorButtonContent()}
      </button>
    </div>
  );
};

export default UserProfileFormTools;
