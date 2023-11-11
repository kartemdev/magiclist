import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '~shared/components';

import './styles.scss'

const PreviewPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='home-page-preview'>
        <div className='home-page-preview__logo-back' />
        <div className='home-page-preview__logo'>
          <span className='home-page-preview__logo-item' />
          <span className='home-page-preview__logo-item' />
        </div>
        <Button
          onClick={() => navigate('/auth/register')}
        >
          {window.translate('begin')}
        </Button>
        <div className='home-page-preview__slogan'>
          <span className='home-page-preview__slogan-item'>{`${window.translate('edit')}`}</span>
          <span className='home-page-preview__slogan-item'>{`${window.translate('analyze')}`}</span>
          <span className='home-page-preview__slogan-item'>{`${window.translate('organize')}`}</span>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;
