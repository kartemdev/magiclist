import { Navigate, Route, Routes } from 'react-router-dom';

import VerifieEmailPage from './verifie-email';
import VerifieConfirmPage from './verifie-confirm';

import './index.scss';

const VerifiePage: React.FC = () => {
  return (
    <div className='verifie-page'>
      <div className='verifie-page__wrapper'>
        <div className='verifie-page__title'>{window.translate('verifie_page_title')}</div>
        <Routes>
          <Route path='email' element={<VerifieEmailPage />} />
          <Route path='/' element={<Navigate to='confirm' />} />
          <Route path='confirm' element={<VerifieConfirmPage />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
      </div>
    </div>
  );
};

export default VerifiePage;
