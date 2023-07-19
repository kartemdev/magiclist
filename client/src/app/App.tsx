import React from 'react';
import { Selector } from '../components';
import Input from '../components/Input';

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
]

const App = () => {
  return (
    <div style={{ margin: '30px 0px 0px 30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Input />
      <Selector
        options={options}
      />
    </div>

  )
};

export default App;

