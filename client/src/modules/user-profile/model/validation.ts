import * as yup from 'yup';

export const validationUserProfileForm = () => {
  return yup.object({
    userName: yup.string()
    .required(window.translate('required_field_error'))
    .min(3, window.translate('min_symbols_length_3'))
    .max(20, window.translate('max_symbols_length_20')),

    userEmail: yup.string()
    .required(window.translate('required_field_error'))
    .min(3, window.translate('min_symbols_length_3'))
    .max(20, window.translate('max_symbols_length_20')),
  });
};
