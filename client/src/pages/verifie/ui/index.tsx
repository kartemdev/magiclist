import { Navigate, Route, Routes } from 'react-router-dom';

import { Page404 } from '../../page-404';
import VerifieEmailPage from './verifie-email';
import VerifieConfirmPage from './verifie-confirm';

import './styles.scss';

const VerifiePage: React.FC = () => {
  return (
    <div className='verifie-page'>
      <div className='verifie-page__wrapper'>
        <div className='verifie-page__title'>
          {window.translate('verifie_page_title')}
        </div>
        <Routes>
          <Route path='email' element={<VerifieEmailPage />} />
          <Route path='/' element={<Navigate to='confirm' />} />
          <Route path='confirm' element={<VerifieConfirmPage />} />
          <Route path='*' element={<Page404 content={window.translate('page_not_found')} />} />
        </Routes>
      </div>
    </div>
  );
};

export default VerifiePage;
