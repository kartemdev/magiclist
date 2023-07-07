import React, { ChangeEvent, FC, useState } from 'react';

import './styles.scss';

interface IProps {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const Input: FC<IProps> = (props) => {
  const {
    name,
    type,
    value,
    onChange,
    label,
    placeholder,
  } = props;

  const uncontrolled = value === undefined;
  
  const [stateValue, setStateValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (onChange) {
      onChange(value);
    }

    if (uncontrolled) {
      setStateValue(value);
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
        value={uncontrolled ? stateValue : value}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Input;

Input.defaultProps = {
  name: '',
  type: 'text',
  label: 'Label',
  placeholder: '',
};
