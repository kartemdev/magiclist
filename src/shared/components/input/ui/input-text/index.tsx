import React, { forwardRef } from 'react';
import withInput from '../with-input';

interface IProps {
  name?: string;
  type?: 'email' | 'text';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputText = forwardRef<HTMLInputElement, IProps>((props , ref) => {
  const {
    name,
    type,
    value,
    onChange,
    placeholder,
  } = props;

  return (
    <input
      ref={ref}
      name={name}
      className='ml-input ml-input-text'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

export default withInput(InputText);
