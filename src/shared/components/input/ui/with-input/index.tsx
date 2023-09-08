import React, { forwardRef, useState } from 'react';

interface IProps {
  name?: string;
  type?: 'email' | 'text';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  ref: React.Ref<HTMLInputElement>
}

const withInput = (Component: React.ComponentType<IProps>) => {
  const InputElement = forwardRef<HTMLInputElement, IProps>(({ value, onChange, ...props }, ref) => {
    const [selfValue, setSelfValue] = useState<string>('');
    
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
      <Component
        {...props}
        ref={ref}
        value={currentValue}
        onChange={handleInputChange}
      />
    );
  });

  InputElement.defaultProps = {
    name: '',
    type: 'text',
    onChange: null,
    placeholder: '',
    autoComplete: '',
  };
  
  return InputElement;
};

export default withInput;
