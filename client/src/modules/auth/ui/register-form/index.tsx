import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from '~services/auth';
import { withoutField } from '~shared/lib';
import { IPayloadRegisterDTO } from '~shared/api';
import { Button, Form, InputGroup, Preloader } from '~shared/components';
import { IRegisterFormData } from '../../types';
import { getErrorMessage, validationRegisterForm } from '../../lib';

import '../styles.scss';

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
      className='auth-form register-form'
      onSubmit={handleSubmitForm(handleSubmit)}
    >
      <InputGroup.Text
        name='userName'
        className='auth-form__user-name'
        label={window.translate('login')}
        error={errors.userName?.message}
        register={registerInput}
      />
      <InputGroup.Text
        name='email'
        className='auth-form__email'
        label={window.translate('email')}
        error={errors.email?.message}
        register={registerInput}
      />
      <InputGroup.Password
        name='password'
        className='auth-form__password'
        label={window.translate('password')}
        autoComplete='new-password'
        error={errors.password?.message}
        register={registerInput}
      />
      <InputGroup.Password
        name='confirmPassword'
        className='auth-form__repeat-password'
        label={window.translate('repeat_password')}
        autoComplete='off'
        error={errors.confirmPassword?.message}
        register={registerInput}
      />
      <Button
        className={classNames('auth-form__submit', {
          ['auth-form__submit-loading']: isLoading,
        })}
        type='submit'
      >
        {isLoading ? <Preloader size={30} thickness={5} typeStyle='secondary'/> : window.translate('sign_up')}
      </Button>
    </Form>
  );
};

export default RegisterForm;
