import React, { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ClosedEye, OpenedEye } from '~shared/assets';
import withInput from '../with-input';

import './styles.scss';
interface IProps {
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  register?: UseFormRegister<FieldValues> | null;
}

const InputPasswrod: React.FC<IProps> = ({ name, register, ...props }) => {
  const [isShowPass, setIsShowPass] = useState<boolean>(false);

  return (
    <>
      <input
        {...props}
        {...register?.(name)}
        type={isShowPass ? 'text' : 'password'}
        className='ml-input ml-input-password'
      />
      <div
        className='ml-input-password__show'
        onClick={() => setIsShowPass((prev) => !prev)}
      >
        {isShowPass ? <OpenedEye /> : <ClosedEye />}
      </div>
    </>
  );
};

export default withInput(InputPasswrod);
