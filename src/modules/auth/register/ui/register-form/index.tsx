import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '~services/auth';
import { Button, Form, InputBlock, InputPassword, InputText } from '~shared/components';
import { RegisterFormData } from '../../types';
import { validationSchema } from '../../lib';

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
  };

  return (
    <Form
      className='register-form'
      onSubmit={handleSubmit(onSubmit)}
      >
      <InputBlock
        className='register-form__user-name'
        label='Логин'
        error={errors.userName?.message}
      >
        <InputText {...registerField('userName')} />
      </InputBlock>
      <InputBlock
        className='register-form__email'
        label='Электронная почта'
        error={errors.email?.message}
      >
        <InputText {...registerField('email')} type='email' />
      </InputBlock>
      <InputBlock
        className='register-form__password'
        label='Пароль'
        error={errors.password?.message}
      >
        <InputPassword {...registerField('password')} autoComplete='new-password' />
      </InputBlock>
      <InputBlock
        className='register-form__repeat-password'
        label='Повторите пароль'
        error={errors.confirmPassword?.message}
      >
        <InputPassword {...registerField('confirmPassword')} autoComplete='off' />
      </InputBlock>
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
