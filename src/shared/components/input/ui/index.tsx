import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import { ClosedEye, OpenedEye } from '~shared/assets';

import './styles.scss';

interface IProps {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    name,
    type,
    value,
    onChange,
    label,
    error,
    placeholder,
    className,
    autoComplete,
  } = props;

  const [selfValue, setSelfValue] = useState<string>('');
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  
  const uncontrolled = value === undefined;
  const currentValue = uncontrolled ? selfValue : value;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (uncontrolled) {
      setSelfValue(event.target.value);
    }
    
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={classNames('magic-input__block', {
      [className]: className,
    })}>
      {label && (
        <div className='magic-input__label'>{label}</div>
      )}
      <input
        ref={ref}
        name={name}
        type={isShowPass ? 'text' : type}
        className='magic-input'
        placeholder={placeholder}
        value={currentValue}
        onChange={handleInputChange}
        autoComplete={autoComplete}
      />
      {type === 'password' && (
        <div
          className='magic-input__show-pass'
          onClick={() => setIsShowPass((prev) => !prev)}
        >
          {isShowPass ? <OpenedEye /> : <ClosedEye />}
        </div>
      )}
      {error && (
        <div className='magic-input__error'>{error}</div>
      )}
    </div>
  )
});

Input.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  error: '',
  placeholder: '',
  autoComplete: '',
  className: '',
};

export default Input;

