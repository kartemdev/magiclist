import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Table } from 'shared/components';
import { HomePage } from 'pages/home-page';
import { LoginPage } from 'pages/login-page';
import { RegisterPage } from 'pages/register-page';
import getColumns from '../columns';

import './styles.scss';

const App = () => {
  const tableData = [
    {
      email: 'arisha@milaya.ru',
      address: 'raduga street',
      age: 0.7
    },
    {
      email: 'julia@love.ru',
      address: 'love street',
      age: 21
    },
    {
      email: 'artyom@strong.ru',
      address: 'fast street',
      age: 22
    }
  ];

  const groups = [
    {
      to: '/table',
      content: 'Таблица'
    },
  ];

  return (
    <div className='app'>
      <Navbar groups={groups}/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='table' element={<Table
          data={tableData}
          columns={getColumns()}
        />}/>
        <Route path='auth'>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
