import { Navigate, Route, Routes } from 'react-router-dom';

import LoginPage from './login-page';
import RegisterPage from './register-page';

const AuthPage: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />}/>
      <Route path='register' element={<RegisterPage />}/>
      <Route path='*' element={<Navigate to='/not-found' />}/>
    </Routes>
  );
};

export default AuthPage;
