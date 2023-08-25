import React from 'react';
import { Navbar, Table } from 'components';
import { Route, Routes } from 'react-router-dom';
import { UserListPage } from 'pages/user-list-page';
import { UserDetailPage } from 'pages/user-detail-page';
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
      to: '/users',
      content: 'Пользователи'
    },
    {
      to: '/table',
      content: 'Таблица'
    }
  ];

  return (
    <>
      <Navbar groups={groups}/>
      <Routes>
        <Route path='users'>
          <Route index element={<UserListPage />} />
          <Route path=':userId' element={<UserDetailPage />} />
        </Route>
        <Route path='/table' element={<Table
          data={tableData}
          columns={getColumns()}
        />}/>
      </Routes>
    </>
  )
};

export default App;
