import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from '~services/auth';
import { Button, Form, InputBlock, InputPassword, InputText, Preloader } from '~shared/ui';
import { LoginFormData } from '../../types';
import { getErrorMessage, validationLoginForm } from '../../lib';

import './styles.scss';

const LoginForm: React.FC = () => {

  const [loginUser, { isLoading, error }] = useLogin();

  const defaultValues = {
    email: '',
    password: '',
  };


  const { register, formState: { errors }, handleSubmit, setError } = useForm({
    defaultValues,
    resolver: yupResolver(validationLoginForm()),
  });

  const onSubmit = (data: LoginFormData) => {
    loginUser(data);
  };

  useEffect(() => {
    const errorMessage = getErrorMessage(error);

    if (errorMessage) {
      const [field, message] = errorMessage;

      setError(field as keyof typeof defaultValues, message)
    }
  }, [error]);

  return (
    <Form
      className='login-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <InputBlock
        className='login-form__email'
        label={window.translate('email')}
        error={errors.email?.message}
      >
        <InputText {...register('email')} type='email' />
      </InputBlock>
      <InputBlock
        className='login-form__password'
        label={window.translate('password')}
        error={errors.password?.message}
      >
        <InputPassword
          {...register('password')}
          autoComplete='current-password'
        />
      </InputBlock>
      <Button
        className={classNames('login-form__submit', {
          ['login-form__submit-loading']: isLoading,
        })}
        type='submit'
      >
        {isLoading ? <Preloader size={30} thickness={5} typeStyle='secondary'/> : window.translate('sign_in')}
      </Button>
    </Form>
  );
};

export default LoginForm;
