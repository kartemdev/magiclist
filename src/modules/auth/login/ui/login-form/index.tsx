import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from '~services/auth';
import { Button, Form, InputBlock, InputPassword, InputText } from '~shared/ui';
import { LoginFormData } from '../../types';
import { validationSchema } from '../../lib';

import './styles.scss';

const LoginForm: React.FC = () => {

  const [loginUser] = useLogin();

  const defaultValues ={
    email: '',
    password: '',
  };

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data: LoginFormData) => {
    loginUser(data);
  };

  return (
    <Form
      className='login-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <InputBlock
        className='login-form__user-name'
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
        className='login-form__submit'
        type='submit'
      >
        {window.translate('sign_in')}
      </Button>
    </Form>
  );
};

export default LoginForm;
