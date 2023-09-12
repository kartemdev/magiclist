import * as yup from 'yup';

export const validationSchema = () => {
  return yup.object({
    email: yup.string()
      .required(window.translate('required_field_error'))
      .email(window.translate('email_validation_error')),
    password: yup.string()
      .required(window.translate('required_field_error'))
      .min(6, window.translate('min_symbols_length_6'))
      .max(20, window.translate('max_symbols_length_20')),
  });
};
