import React, { useState } from 'react';
import { Selector, Input, Button, NavBar, Modal } from 'components';
import { CheckBox } from '../components';
import { Route, Routes } from 'react-router-dom';

import './styles.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    input: '',
    selector: null,
  })

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
      to: 'input',
      content: 'Input'
    },
    {
      to: 'selector',
      content: 'Selector'
    },
    {
      to: 'button',
      content: 'Button'
    },
    {
      to: '/modal',
      content: 'Modal'
    },
    {
      to: '/checkbox',
      content: 'CheckBox'
    }
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, input: event.target.value }))
  }

  const handleSelectChange = (option: {label: string, value:number} ) => {
    setState((prev) => ({ ...prev, selector: option }))
  }

  return (
    <>
      <NavBar groups={groups} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <Routes>
            <Route path='/' element={<Input />} />
            <Route path='/input' element={<Input />}/>
            <Route path='/selector' element={<Selector options={options}/>}/>
            <Route path='/button' element={<Button onClick={() => {}} />}/>
            <Route path='/modal' element={
              <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            }/>
            <Route path='/checkbox' element={<CheckBox />}/>
        </Routes>
      </div>

      <Modal
        isOpen={isOpen}
        className='app-modal'
        onClose={() => setIsOpen(false)}
      >
        <div className='app-modal__body'>
            <Input
              value={state.input}
              onChange={handleInputChange}
            />
            <Selector
              options={options}
              selected={state.selector}
              onChange={handleSelectChange}
            />
        </div>
        <div className="app-modal__footer">
          <Button onClick={() => window.alert(`${state.input} ${state.selector?.label}`)}/>
        </div>
      </Modal>
    </>
  )
};

export default App;
