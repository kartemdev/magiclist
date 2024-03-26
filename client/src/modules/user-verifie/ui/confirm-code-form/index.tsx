import React, { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { matchErrorMessage } from '~shared/lib';
import { useConfirmVerifieUser } from '~services/user';
import { Button, Form, InputGroup, Preloader } from '~shared/components';
import { CONFIRM_CODE_FORM_ERRORS, IConfirmCodeFormData, validationConfirmCodeForm } from '../../model';

import './styles.scss';

const UserVerifieConfirmCodeForm: React.FC = () => {
  const [confirmCode, { error, isLoading }] = useConfirmVerifieUser();

  const defaultValues = useMemo(() => ({ confirmCode: '' }), []);

  const {
    register: registerInput,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationConfirmCodeForm()),
  });

  const handleSubmit = (data: IConfirmCodeFormData) => {
    confirmCode(data.confirmCode);
  };

  useEffect(() => {
    const errorMessage = matchErrorMessage(error, CONFIRM_CODE_FORM_ERRORS);

    if (errorMessage) {
      const [field, message] = errorMessage;
      setError(field as Key<typeof defaultValues>, message)
    }
  }, [error]);

  return (
    <Form
      className='user-verifie-confirm-code-form'
      onSubmit={handleSubmitForm(handleSubmit)}
    >
      <InputGroup.Text
        name='confirmCode'
        error={errors?.confirmCode?.message}
        registerProps={registerInput('confirmCode')}
      />
      <Button
        type='submit'
        isDisabled={isLoading}
      >
        {isLoading ? (
          <Preloader size={30} thickness={5} typeStyle='secondary'/>
        ) : (
          window.translate('user_verifie_handle_confirm_code')
        )}
      </Button>
    </Form>
  )
}

export default UserVerifieConfirmCodeForm;
