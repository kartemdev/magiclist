import * as yup from 'yup';

const validationFields = {
  userName: yup.string()
    .required(window.translate('required_field_error'))
    .min(3, window.translate('min_symbols_length_3'))
    .max(20, window.translate('max_symbols_length_20')),

  email: yup.string()
    .required(window.translate('required_field_error'))
    .email(window.translate('email_validation_error')),

  password: yup.string()
    .required(window.translate('required_field_error'))
    .min(6, window.translate('min_symbols_length_6'))
    .max(20, window.translate('max_symbols_length_20')),

  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], window.translate('repeat_password_validation_error')),
};

export const validationLoginForm = () => {
  const { email, password } = validationFields;

  return yup.object({
    email,
    password,
  });
};

export const validationRegisterForm = () => {
  return yup.object({
    ...validationFields,
  });
};

