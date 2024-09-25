import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { useRegister } from '~services/auth';
import { matchErrorMessage, withoutFields } from '~shared/lib';
import { IRegisterRequestDTO } from '~shared/api';
import { Button, Form, InputGroup, Preloader } from '~shared/ui';

import {
  IRegisterFormData,
  REGISTER_FORM_ERRORS,
  RegisterFormFieldEnum,
  validationRegisterForm,
} from '../../model';

import '../index.scss';

const RegisterForm: React.FC = () => {
  const [registerUser, { isLoading, error }] = useRegister({ fixedCacheKey: 'register' });

  const defaultValues = useMemo(
    () => ({
      [RegisterFormFieldEnum.UserName]: '',
      [RegisterFormFieldEnum.Email]: '',
      [RegisterFormFieldEnum.Password]: '',
      [RegisterFormFieldEnum.ComfirmPassword]: '',
    }),
    [],
  );

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
    const errorMessage = matchErrorMessage<IRegisterFormData>(error, REGISTER_FORM_ERRORS);

    if (errorMessage) {
      setError(...errorMessage);
    }
  }, [error]);

  const handleSubmit = (data: IRegisterFormData) => {
    registerUser(
      withoutFields<IRegisterFormData, IRegisterRequestDTO>(data, [
        RegisterFormFieldEnum.ComfirmPassword,
      ]),
    );
  };

  return (
    <Form className='auth-form register-form' onSubmit={handleSubmitForm(handleSubmit)}>
      <InputGroup.Text
        name={RegisterFormFieldEnum.UserName}
        className='auth-form__user-name'
        label={window.translate('user_name')}
        error={window.translate(errors.userName?.message)}
        registerProps={registerInput(RegisterFormFieldEnum.UserName)}
      />
      <InputGroup.Text
        name={RegisterFormFieldEnum.Email}
        className='auth-form__email'
        label={window.translate('email')}
        error={window.translate(errors.email?.message)}
        registerProps={registerInput(RegisterFormFieldEnum.Email)}
      />
      <InputGroup.Password
        name={RegisterFormFieldEnum.Password}
        className='auth-form__password'
        label={window.translate('password')}
        autoComplete='new-password'
        error={window.translate(errors.password?.message)}
        registerProps={registerInput(RegisterFormFieldEnum.Password)}
      />
      <InputGroup.Password
        name={RegisterFormFieldEnum.ComfirmPassword}
        className='auth-form__repeat-password'
        label={window.translate('repeat_password')}
        autoComplete='off'
        error={window.translate(errors.confirmPassword?.message)}
        registerProps={registerInput(RegisterFormFieldEnum.ComfirmPassword)}
      />
      <Button
        className={classNames('auth-form__submit', {
          ['auth-form__submit-loading']: isLoading,
        })}
        type='submit'
      >
        {isLoading ? (
          <Preloader size={30} thickness={5} typeStyle='secondary' />
        ) : (
          window.translate('sign_up')
        )}
      </Button>
    </Form>
  );
};

export default RegisterForm;
