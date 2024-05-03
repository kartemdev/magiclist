export enum UserProfileFormFieldEnum {
  UserName = 'userName',
  UserEmail = 'userEmail'
};

export interface IUserProfileFormData {
  [UserProfileFormFieldEnum.UserName]: string;
  [UserProfileFormFieldEnum.UserEmail]: string;
};

export type UserProfileFormDirtyFields = Partial<Readonly<{
  [UserProfileFormFieldEnum.UserName]: boolean;
  [UserProfileFormFieldEnum.UserEmail]: boolean;
}>>
