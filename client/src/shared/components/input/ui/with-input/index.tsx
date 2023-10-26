import React, { memo, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  name: string;
  type?: 'email' | 'text';
  label?: string;
  className?: string;
  error?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  register?: UseFormRegister<FieldValues> | null;
}

const withInput = (Component: React.ComponentType<IProps>) => {
  const InputElement: React.FC<IProps> = (props) => {
    const {
      value,
      onChange,
      register,
      label,
      error,
      className,
    } = props;

    const [selfValue, setSelfValue] = useState<string>('');
    
    const uncontrolled = value === undefined && !register;
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
      <div className={classNames('ml-input__block', {
        [className]: className,
      })}>
        {label && (
          <div className='ml-input__label'>{label}</div>
        )}
          <Component
            {...props}
            value={currentValue}
            register={register}
            onChange={handleInputChange}
          />
        {error && (
          <div className='ml-input__error'>{error}</div>
        )}
      </div>
    );
  };

  InputElement.defaultProps = {
    type: 'text',
    onChange: null,
    placeholder: '',
    autoComplete: '',
    register: null,
  };
  
  return memo(InputElement);
};

export default withInput;
