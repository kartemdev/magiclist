import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classNames from 'classnames';

import './styles.scss';

interface IInputProps {
  name: string;
  type?: 'email' | 'text';
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  registerProps?: UseFormRegisterReturn<string> | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IProps extends IInputProps {
  value?: string;
  label?: string;
  error?: string;
  className?: string;
}

const withInput = (Component: React.ComponentType<IProps>) => {
  const InputElement: React.FC<IProps> = (props) => {
    const {
      value,
      label,
      error,
      onChange,
      className,
      registerProps,
    } = props;

    const [selfValue, setSelfValue] = useState('');
    
    const uncontrolled = value === undefined && !registerProps;
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
    autoComplete: 'off',
    registerProps: null,
    disabled: false,
  };
  
  return memo(InputElement);
};

export default withInput;
