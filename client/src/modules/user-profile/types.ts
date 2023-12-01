export enum FieldNamesEnum {
  USER_NAME = 'userName',
  USER_EMAIL = 'userEmail',
};

export interface IUserProfileFormData {
  userName: string;
  userEmail: string;
};

export type DirtyFields = Partial<Readonly<{
  userName: boolean;
  userEmail: boolean;
}>>; 
