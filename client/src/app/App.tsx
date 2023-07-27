import React, { useState } from 'react';
import { Selector, Input, Button } from '../components';

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
  const [state, setState] = useState({
    inputValue: '',
    selectedValue: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, inputValue: event.target.value }))
  };

  const handleSelectChange = (option: { label: string, value: unknown }) => {
    setState((prevState) => ({ ...prevState, selectedValue: option }))
  }

  const handleClick = () => {
    window.alert(`${state.inputValue}\n${state.selectedValue?.label}`)
  }


  return (
    <div style={{ margin: '30px 0px 0px 30px', display: 'flex', flexDirection: 'column', gap: '10px', padding: '30px' }}>
      <Input
        value={state.inputValue}
        onChange={handleInputChange}
      />
      <Selector
        options={options}
        selected={state.selectedValue}
        onChange={handleSelectChange}
      />
      <Button 
        onClick={handleClick}
      />
    </div>

  )
};

export default App;

