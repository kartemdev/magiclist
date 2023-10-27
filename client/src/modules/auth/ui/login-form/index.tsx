import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from '~services/auth';
import { Button, Form, InputPassword, InputText, Preloader } from '~shared/components';
import { ILoginFormData } from '../../types';
import { getErrorMessage, validationLoginForm } from '../../lib';

import './styles.scss';

const LoginForm: React.FC = () => {
  const [loginUser, { isLoading, error }] = useLogin({ fixedCacheKey: 'login' });

  const defaultValues = useMemo(() => ({
    email: '',
    password: '',
  }), []);

  const {
    register: registerInput,
    formState: { errors },
    handleSubmit: handleSubmitForm,
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationLoginForm()),
  });

  useEffect(() => {
    const errorMessage = getErrorMessage(error);

    if (errorMessage) {
      const [field, message] = errorMessage;

      setError(field as Key<typeof defaultValues>, message)
    }
  }, [error]);
  
  const handleSubmit = (data: ILoginFormData) => {
    loginUser(data);
  };

  return (
    <Form
      className='login-form'
      onSubmit={handleSubmitForm(handleSubmit)}
    >
      <InputText
        name='email'
        className='login-form__email'
        label={window.translate('email')}
        error={errors.email?.message}
        register={registerInput}
      />
      <InputPassword
        name='password'
        className='login-form__password'
        autoComplete='current-password'
        label={window.translate('password')}
        error={errors.password?.message}
        register={registerInput}
      />
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
