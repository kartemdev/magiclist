import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import { IUserProfileFormData, UserProfileFormDirtyFields, UserProfileFormFieldEnum } from "../model";

export interface IUserProfileFormFieldProps {
  error: string;
  disabledMode: UserProfileFormFieldEnum;
  dirtyFields: UserProfileFormDirtyFields;
  registerInput: UseFormRegister<Partial<IUserProfileFormData>>;
  onChangeDisabledMode: (mode: UserProfileFormFieldEnum) => void;
  onSubmitForm: UseFormHandleSubmit<Partial<IUserProfileFormData>, undefined>;
};
