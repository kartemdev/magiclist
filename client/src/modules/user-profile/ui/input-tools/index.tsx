import { CheckIcon, CrossCancelIcon, EditPenIcon } from '~shared/assets';

import { UserProfileFormDirtyFields, UserProfileFormFieldEnum } from '../../model';

import './styles.scss';

interface IProps {
  dirtyFields?: UserProfileFormDirtyFields,
  disabledMode?: UserProfileFormFieldEnum;
  keyFieldName?:  Key<typeof UserProfileFormFieldEnum>;
  onApply: () => void;
  onChangeDisabledMode?: (mode: UserProfileFormFieldEnum) => void;
}

const UserProfileInputTools: React.FC<IProps> = (props) => {
  const {
    dirtyFields,
    disabledMode,
    keyFieldName,
    onApply,
    onChangeDisabledMode
  } = props;

  const currentField = UserProfileFormFieldEnum[keyFieldName];

  const handleChangeDisabledMode = () => {
    onChangeDisabledMode(disabledMode === currentField ? null : currentField);
  };

  const renderEditorButtonContent = () => (
    disabledMode === currentField ? (
      <CrossCancelIcon className='user-profile-input-tools__editor_icon-cross' />
    ) : (
      <EditPenIcon className='user-profile-input-tools__editor_icon-pen' />
    )
  );

  return (
    <div className='user-profile-input-tools'>
      {dirtyFields[currentField] && (
        <button
          type='button'
          onClick={onApply}
          className='user-profile-input-tools__apply'
        >
          <CheckIcon className='user-profile-input-tools__apply_icon-check'/>
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

export default UserProfileInputTools;
