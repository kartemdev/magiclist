import React, { useState } from 'react';

import './styles.scss';

interface IProps {
  name?: string;
  label?: string;
  checked?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = (props) => {
  const {
    name,
    label,
    checked,
    value,
    onChange,
  } = props;

  const [selfChecked, setSelfChecked] = useState(false);

  const uncontrolled = checked === undefined;
  const currentChecked = uncontrolled ? selfChecked : checked;

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    if (uncontrolled) {
      setSelfChecked(checked);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className='magic-checkbox__block'>
      <label className='magic-checkbox__label'>
        <input
          name={name}
          type='checkbox'
          checked={currentChecked}
          value={value}
          onChange={handleCheckedChange}
          onClick={(event) => event.stopPropagation()}
        />
        <span className='magic-checkbox'></span>
        {label}
      </label>
    </div>
  )
};

Checkbox.defaultProps = {
  name: '',
  label: '',
  value: '',
  onChange: null,
};

export default Checkbox;
