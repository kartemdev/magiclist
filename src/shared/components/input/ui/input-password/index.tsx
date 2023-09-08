import React, { forwardRef, useState } from 'react';
import { ClosedEye, OpenedEye } from '~shared/assets';
import withInput from '../with-input';

import './styles.scss';
interface IProps {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
}

const InputPasswrod = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    name,
    value,
    onChange,
    placeholder,
    autoComplete,
  } = props;

  const [isShowPass, setIsShowPass] = useState<boolean>(false);

  return (
    <>
      <input
        ref={ref}
        name={name}
        type={isShowPass ? 'text' : 'password'}
        className='magic-input magic-input-password'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      <div
        className='magic-input-password__show'
        onClick={() => setIsShowPass((prev) => !prev)}
      >
        {isShowPass ? <OpenedEye /> : <ClosedEye />}
      </div>
    </>
  );
});

export default withInput(InputPasswrod);
