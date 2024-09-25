import { UseFormHandleSubmit, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import {
  IUserProfileFormData,
  UserProfileFormDirtyFields,
  UserProfileFormFieldEnum,
} from '../model';

export interface IUserProfileFormFieldProps {
  error: string;
  disabledMode: UserProfileFormFieldEnum;
  dirtyFields: UserProfileFormDirtyFields;
  initValue: UseFormSetValue<Partial<IUserProfileFormData>>;
  registerInput: UseFormRegister<Partial<IUserProfileFormData>>;
  onChangeDisabledMode: (mode: UserProfileFormFieldEnum) => void;
  onSubmitForm: UseFormHandleSubmit<Partial<IUserProfileFormData>, undefined>;
}
