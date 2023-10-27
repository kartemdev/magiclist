import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '~services/auth';
import { withoutField } from '~shared/lib';
import { IPayloadRegisterDTO } from '~services/auth/types';
import { Button, Form, InputPassword, InputText, Preloader } from '~shared/components';
import { IRegisterFormData } from '../../types';
import { getErrorMessage, validationRegisterForm } from '../../lib';

import './styles.scss';

const RegisterForm: React.FC = () => {
  const [registerUser, { isLoading, error }] = useRegister({ fixedCacheKey: 'register' });

  const defaultValues = useMemo(() => ({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }), []);

  const {
    register: registerInput,
    formState: { errors },
    handleSubmit: handleSubmitForm,
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationRegisterForm()),
  });
  
  useEffect(() => {
    const errorMessage = getErrorMessage(error);

    if (errorMessage) {
      const [field, message] = errorMessage;

      setError(field as Key<typeof defaultValues>, message)
    }
  }, [error]);
  
  const handleSubmit = (data: IRegisterFormData) => {
    registerUser(withoutField<IRegisterFormData, IPayloadRegisterDTO>(data, 'confirmPassword'));
  };
  
  return (
    <Form
      className='register-form'
      onSubmit={handleSubmitForm(handleSubmit)}
    >
      <InputText
        name='userName'
        className='register-form__user-name'
        label={window.translate('login')}
        error={errors.userName?.message}
        register={registerInput}
      />
      <InputText
        name='email'
        className='register-form__email'
        label={window.translate('email')}
        error={errors.email?.message}
        register={registerInput}
      />
      <InputPassword
        name='password'
        className='register-form__password'
        label={window.translate('password')}
        autoComplete='new-password'
        error={errors.password?.message}
        register={registerInput}
      />
      <InputPassword
        name='confirmPassword'
        className='register-form__repeat-password'
        label={window.translate('repeat_password')}
        autoComplete='off'
        error={errors.confirmPassword?.message}
        register={registerInput}
      />
      <Button
        className={classNames('register-form__submit', {
          ['register-form__submit-loading']: isLoading,
        })}
        type='submit'
      >
        {isLoading ? <Preloader size={30} thickness={5} typeStyle='secondary'/> : window.translate('create_acc')}
      </Button>
    </Form>
  );
};

export default RegisterForm;
