import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLogin } from './auth-login';
import { AuthRegister } from './auth-register';

const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
      <Routes>
        <Route path='login' element={<AuthLogin />}/>
        <Route path='register' element={<AuthRegister />}/>
        <Route path='*' element={<Navigate to='/auth/login' replace />}/>
      </Routes>
    </div>
  );
};

export default AuthPage;
