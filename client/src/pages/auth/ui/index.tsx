import { Navigate, Route, Routes } from 'react-router-dom';

import { Page404 } from '../../page-404';
import LoginPage from './login-page';
import RegisterPage from './register-page';

const AuthPage: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />}/>
      <Route path='register' element={<RegisterPage />}/>
      <Route path='*' element={<Page404 content={window.translate('page_not_found')} />}/>
    </Routes>
  );
};

export default AuthPage;
