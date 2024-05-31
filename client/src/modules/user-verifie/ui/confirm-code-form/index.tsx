import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useConfirmInitialVerifie } from '~services/user';
import { matchErrorMessage } from '~shared/lib';
import { Button, Form, InputGroup, Preloader } from '~shared/components';

import {
  IConfirmCodeFormData,
  CONFIRM_CODE_FORM_ERRORS,
  ConfirmCodeFormFieldEnum,
  validationConfirmCodeForm,
} from '../../model';

import './styles.scss';

const UserVerifieConfirmCodeForm: React.FC = () => {
  const [confirmCode, { error, isLoading }] = useConfirmInitialVerifie();

  const defaultValues = useMemo(() => ({ [ConfirmCodeFormFieldEnum.ConfirmCode]: '' }), []);

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
    const errorMessage = matchErrorMessage<IConfirmCodeFormData>(error, CONFIRM_CODE_FORM_ERRORS);

    if (errorMessage) {
      setError(...errorMessage)
    }
  }, [error]);

  return (
    <Form
      className='user-verifie-confirm-code-form'
      onSubmit={handleSubmitForm(handleSubmit)}
    >
      <InputGroup.Text
        name={ConfirmCodeFormFieldEnum.ConfirmCode}
        error={window.translate(errors.confirmCode?.message)}
        registerProps={registerInput(ConfirmCodeFormFieldEnum.ConfirmCode)}
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
