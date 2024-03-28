import * as yup from 'yup';

const validationFields = {
  changedEmail: yup.string()
    .required(window.translate('required_field_error'))
    .email(window.translate('email_validation_error')),
  confirmCode: yup.string()
    .required(window.translate('required_field_error'))
    .length(4, window.translate('length_symbols_4')),
};

export const validationChangeEmailForm = () => {
  const { changedEmail } = validationFields;

  return yup.object({ changedEmail });
};

export const validationConfirmCodeForm = () => {
  const { confirmCode } = validationFields;

  return yup.object({ confirmCode });
};
