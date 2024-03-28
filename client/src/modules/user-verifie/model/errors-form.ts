import { ChangeEmailFormFieldsEnum, ConfirmCodeFormFieldsEnum } from "./model";

export const CHANGE_EMAIL_FORM_ERRORS = {
  'user_email_already_exists': ChangeEmailFormFieldsEnum.ChangedEmail,
};

export const CONFIRM_CODE_FORM_ERRORS = {
  'user_verifie_invalid_data': ConfirmCodeFormFieldsEnum.ConfirmCode,
  'user_verifie_expires_data': ConfirmCodeFormFieldsEnum.ConfirmCode,
};
