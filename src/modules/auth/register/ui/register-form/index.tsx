import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '~services/auth';
import { Button, Form, InputBlock, InputPassword, InputText } from '~shared/ui';
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
        label={window.translate('login')}
        error={errors.userName?.message}
      >
        <InputText {...registerField('userName')} />
      </InputBlock>
      <InputBlock
        className='register-form__email'
        label={window.translate('email')}
        error={errors.email?.message}
      >
        <InputText {...registerField('email')} type='email' />
      </InputBlock>
      <InputBlock
        className='register-form__password'
        label={window.translate('password')}
        error={errors.password?.message}
      >
        <InputPassword {...registerField('password')} autoComplete='new-password' />
      </InputBlock>
      <InputBlock
        className='register-form__repeat-password'
        label={window.translate('repeat_password')}
        error={errors.confirmPassword?.message}
      >
        <InputPassword {...registerField('confirmPassword')} autoComplete='off' />
      </InputBlock>
      <Button
        className='register-form__submit'
        type='submit'
      >
        {window.translate('create_acc')}
      </Button>
    </Form>
  );
};

export default RegisterForm;
