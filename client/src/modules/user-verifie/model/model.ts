export enum ChangeEmailFormFieldsEnum {
  ChangedEmail = 'changedEmail',
}

export interface IChangeEmailFormData {
  [ChangeEmailFormFieldsEnum.ChangedEmail]: string;
}

export enum ConfirmCodeFormFieldsEnum {
  ConfirmCode = 'confirmCode',
}

export interface IConfirmCodeFormData {
  [ConfirmCodeFormFieldsEnum.ConfirmCode]: string;
}

export const MINUTES_BLOCKED_SEND_VERIFIE = 3;
