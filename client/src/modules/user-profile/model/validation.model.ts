import * as yup from 'yup';

export const validationUserProfileForm = () => {
  return yup.object({
    userName: yup
      .string()
      .required('required_field_error')
      .min(3, 'min_symbols_length_3')
      .max(20, 'max_symbols_length_20'),

    userEmail: yup
      .string()
      .required('required_field_error')
      .min(3, 'min_symbols_length_3')
      .max(20, 'max_symbols_length_20'),
  });
};
