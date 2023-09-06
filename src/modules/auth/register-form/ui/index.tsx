import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '~services/auth';
import { Button, Form, Input } from '~shared/components';
import { RegisterFormData } from '../types';
import { validationSchema } from '../lib';

import './styles.scss';

const RegisterForm: React.FC = () => {

  const [registerUser] = useRegister();

  const defaultValues ={
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { register: registerField, formState: { errors }, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data: RegisterFormData) => {
    delete data.confirmPassword;
    registerUser(data);
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
        {...registerField('userName')}
      />
      <Input
        className='register-form__email'
        label='Электронная почта'
        error={errors.email?.message}
        type='email'
        {...registerField('email')}
      />
      <Input
        className='register-form__password'
        label='Пароль'
        type='password'
        autoComplete='new-password'
        error={errors.password?.message}
        {...registerField('password')}
      />
      <Input
        className='register-form__repeat-password'
        label='Повторите пароль'
        error={errors.confirmPassword?.message}
        type='password'
        autoComplete='off'
        {...registerField('confirmPassword')}
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
