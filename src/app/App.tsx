import React, { useState } from 'react';
import { Selector, Input, Button, NavBar } from '../components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const options = [
  {
    label: 'Artyom',
    value: 22,
  },
  {
    label: 'Julia',
    value: 21,
  },
  {
    label: 'Arisha',
    value: 0.7,
  },
];

const groups = [
  {
    to: '/input',
    content: 'Input'
  },
  {
    to: '/selector',
    content: 'Selector'
  },
  {
    to: '/button',
    content: 'Button'
  }
];

const App = () => {

  return (
    <>
    <NavBar groups={groups} />

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      <Routes>
        <Route path='/' element={<Input />}>
          <Route path='/input' element={<Input />}/>
          <Route path='/selector' element={<Selector options={[]}/>}/>
          <Route path='/button' element={<Button onClick={() => {}} />}/>
        </Route>
      </Routes>
    </div>
    </>
  )
};

export default App;

