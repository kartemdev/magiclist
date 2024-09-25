import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { useLogin } from '~services/auth';
import { matchErrorMessage } from '~shared/lib';
import { Button, Form, InputGroup, Preloader } from '~shared/ui';

import {
  ILoginFormData,
  LOGIN_FORM_ERRORS,
  LoginFormFieldEnum,
  validationLoginForm,
} from '../../model';

import '../index.scss';

const LoginForm: React.FC = () => {
  const [loginUser, { isLoading, error }] = useLogin({ fixedCacheKey: 'login' });

  const defaultValues = useMemo(
    () => ({
      [LoginFormFieldEnum.Email]: '',
      [LoginFormFieldEnum.Password]: '',
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
    resolver: yupResolver(validationLoginForm()),
  });

  useEffect(() => {
    const errorMessage = matchErrorMessage<ILoginFormData>(error, LOGIN_FORM_ERRORS);

    if (errorMessage) {
      setError(...errorMessage);
    }
  }, [error]);

  const handleSubmit = (data: ILoginFormData) => {
    loginUser(data);
  };

  return (
    <Form className='auth-form login-form' onSubmit={handleSubmitForm(handleSubmit)}>
      <InputGroup.Text
        name={LoginFormFieldEnum.Email}
        className='auth-form__email'
        label={window.translate('email')}
        error={window.translate(errors.email?.message)}
        registerProps={registerInput(LoginFormFieldEnum.Email)}
      />
      <InputGroup.Password
        name={LoginFormFieldEnum.Password}
        className='auth-form__password'
        autoComplete='current-password'
        label={window.translate('password')}
        error={window.translate(errors.password?.message)}
        registerProps={registerInput(LoginFormFieldEnum.Password)}
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
          window.translate('sign_in')
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;
