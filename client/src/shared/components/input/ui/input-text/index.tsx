import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import withInput from '../with-input';

interface IProps {
  name: string;
  type?: 'email' | 'text';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  registerProps?: UseFormRegisterReturn<string> | null;
}

const InputText: React.FC<IProps> = ({name, registerProps, ...props}) => {
  return (
    <input
      {...props}
      {...registerProps}
      className='ml-input ml-input-text'
    />
  );
};

export default withInput(InputText);
