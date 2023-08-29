import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input } from 'shared/components';
import { RegisterFormData } from '../types';
import { validationSchema } from '../utils';

import './styles.scss';

const RegisterForm: React.FC = () => {

  const defaultValues ={
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  }

  return (
    <Form
      className='register-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <Input
        className='register-form__user-name'
        label='Логин'
        error={errors.userName?.message}
        {...register('userName')}
      />
      <Input
        className='register-form__email'
        label='Электронная почта'
        error={errors.email?.message}
        type='email'
        {...register('email')}
      />
      <Input
        className='register-form__password'
        label='Пароль'
        type='password'
        autoComplete='new-password'
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        className='register-form__repeat-password'
        label='Повторите пароль'
        error={errors.confirmPassword?.message}
        type='password'
        autoComplete='off'
        {...register('confirmPassword')}
      />
      <Button
        className='register-form__submit'
        type='submit'
      >
        {'Создать аккаунт'}
      </Button>
    </Form>
  );
};


export default RegisterForm;
