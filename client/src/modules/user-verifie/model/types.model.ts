export enum ChangeEmailFormFieldEnum {
  ChangedEmail = 'changedEmail',
}

export interface IChangeEmailFormData {
  [ChangeEmailFormFieldEnum.ChangedEmail]: string;
}

export enum ConfirmCodeFormFieldEnum {
  ConfirmCode = 'confirmCode',
}

export interface IConfirmCodeFormData {
  [ConfirmCodeFormFieldEnum.ConfirmCode]: string;
}
