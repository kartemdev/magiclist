import * as yup from 'yup';

const validationFields = {
  userName: yup
    .string()
    .required('required_field_error')
    .min(3, 'min_symbols_length_3')
    .max(20, 'max_symbols_length_20'),

  email: yup.string().required('required_field_error').email('email_validation_error'),

  password: yup
    .string()
    .required('required_field_error')
    .min(6, 'min_symbols_length_6')
    .max(20, 'max_symbols_length_20'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'repeat_password_validation_error'),
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
