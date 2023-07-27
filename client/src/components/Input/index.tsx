import React, { useState } from 'react';

import './styles.scss';

interface IProps {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {
  const {
    name,
    type,
    value,
    onChange,
    label,
    placeholder,
  } = props;

  const [selfValue, setSelfValue] = useState<string>('');
  
  const uncontrolled = value === undefined;
  const currentValue = uncontrolled ? selfValue : value;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (uncontrolled) {
      setSelfValue(event.target.value);
    }
  }

  return (
    <div className='magic-input__block'>
      {label && (
        <div className='magic-input__label'>{label}</div>
      )}
      <input
        name={name}
        type={type}
        className='magic-input'
        placeholder={placeholder}
        value={currentValue}
        onChange={handleInputChange}
      />
    </div>
  )
}

Input.defaultProps = {
  name: '',
  type: 'text',
  label: 'Label',
  placeholder: '',
};

export default Input;

