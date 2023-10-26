import React from 'react';
import withInput from '../with-input';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  name: string;
  type?: 'email' | 'text';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  register?: UseFormRegister<FieldValues> | null;
}

const InputText: React.FC<IProps> = ({name, register, ...props}) => {
  return (
    <input
      {...props}
      {...register?.(name)}
      className='ml-input ml-input-text'
    />
  );
};

export default withInput(InputText);
