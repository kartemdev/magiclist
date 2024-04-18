import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ClosedEye, OpenedEye } from '~shared/assets';

import withInput from '../with-input';

import './styles.scss';

interface IProps {
  name: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  autoComplete: string;
  registerProps: UseFormRegisterReturn<string> | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPasswrod: React.FC<IProps> = ({ registerProps, ...props }) => {
  const {
    name,
    value,
    disabled,
    onChange,
    placeholder,
    autoComplete,
  } = props;

  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <>
      <input
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={isShowPass ? 'text' : 'password'}
        className='ml-input ml-input-password'
        {...registerProps}
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
