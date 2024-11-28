import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import(/* webpackChunkName: "ml_auth_login" */ './login-page'));
const RegisterPage = lazy(
  () => import(/* webpackChunkName: "ml_auth_register" */ './register-page'),
);

const AuthPage: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='*' element={<Navigate to='/not-found' />} />
    </Routes>
  );
};

export default AuthPage;
