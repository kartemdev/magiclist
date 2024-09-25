import { ChangeEmailFormFieldEnum, ConfirmCodeFormFieldEnum } from './types.model';

export const MINUTES_BLOCKED_SEND_VERIFIE = 3;

export const CHANGE_EMAIL_FORM_ERRORS = {
  user_email_already_exists: ChangeEmailFormFieldEnum.ChangedEmail,
};

export const CONFIRM_CODE_FORM_ERRORS = {
  user_verifie_invalid_data: ConfirmCodeFormFieldEnum.ConfirmCode,
  user_verifie_expires_data: ConfirmCodeFormFieldEnum.ConfirmCode,
};
