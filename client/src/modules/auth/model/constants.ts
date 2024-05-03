import { LoginFormFieldEnum, RegisterFormFieldEnum } from "./types";

export const LOGIN_FORM_ERRORS = {
  'invalid_password_email': LoginFormFieldEnum.Email,
};

export const REGISTER_FORM_ERRORS = {
  'user_name_already_exists': RegisterFormFieldEnum.UserName,
  'user_email_already_exists': RegisterFormFieldEnum.Email,
};
