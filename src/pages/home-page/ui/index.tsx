import React from 'react'
import { Button } from 'shared/components';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const HomePage: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div className='home-page'>
      <Button onClick={() => navigate('/auth/login')}>Начать</Button>
    </div>
  )
}

export default HomePage;
