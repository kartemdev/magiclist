import { UseFormRegisterReturn } from 'react-hook-form';

import withInput from '../with-input';

interface IProps {
  name: string;
  type: 'email' | 'text';
  value: string;
  disabled: boolean;
  placeholder: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  registerProps: UseFormRegisterReturn<string> | null;
}

const InputText: React.FC<IProps> = ({registerProps, ...props}) => {
  const {
    name,
    type,
    value,
    disabled,
    onChange,
    placeholder,
    autoComplete,
  } = props;

  return (
    <input
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className='ml-input ml-input-text'
      {...registerProps}
    />
  );
};

export default withInput(InputText);
