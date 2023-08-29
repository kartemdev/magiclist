import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input } from 'shared/components';
import { LoginFormData } from '../types';
import { validationSchema } from '../../login-form/utils';

import './styles.scss';

const LoginForm: React.FC = () => {
  const defaultValues ={
    email: '',
    password: '',
  };

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  }

  return (
    <Form
      className='login-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <Input
        className='login-form__user-name'
        label='Электронная почта'
        type='email'
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        className='login-form__password'
        label='Пароль'
        type='password'
        autoComplete='current-password'
        error={errors.password?.message}
        {...register('password')}
      />
      <Button
        className='login-form__submit'
        type='submit'
      >
        {'Войти'}
      </Button>
    </Form>
  );
};

export default LoginForm;
