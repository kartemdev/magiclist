import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, InputBlock, InputPassword, InputText } from '~shared/components';
import { LoginFormData } from '../../types';
import { validationSchema } from '../../lib';

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
  };

  return (
    <Form
      className='login-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <InputBlock
        className='login-form__user-name'
        label='Электронная почта'
        error={errors.email?.message}
      >
        <InputText {...register('email')} type='email' />
      </InputBlock>
      <InputBlock
        className='login-form__password'
        label='Пароль'
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
        {'Войти'}
      </Button>
    </Form>
  );
};

export default LoginForm;
