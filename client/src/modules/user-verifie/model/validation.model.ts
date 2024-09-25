import * as yup from 'yup';

const validationFields = {
  changedEmail: yup.string().required('required_field_error').email('email_validation_error'),
  confirmCode: yup.string().required('required_field_error').length(4, 'length_symbols_4'),
};

export const validationChangeEmailForm = () => {
  const { changedEmail } = validationFields;

  return yup.object({ changedEmail });
};

export const validationConfirmCodeForm = () => {
  const { confirmCode } = validationFields;

  return yup.object({ confirmCode });
};
