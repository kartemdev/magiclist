import React, { useState } from 'react';

import './styles.scss';

interface IProps {
  name?: string;
  label?: string;
  checked?: boolean;
  value?: string | number;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<IProps> = (props) => {
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
      onChange(checked);
    }
  };

  return (
    <div className='magic-check-box__block'>
      <label className='magic-check-box__label'>
        <input
          name={name}
          type='checkbox'
          checked={currentChecked}
          value={value}
          onChange={handleCheckedChange}
        />
        <span className='magic-check-box'></span>
        {label}
      </label>
    </div>
  )
};

CheckBox.defaultProps = {
  name: '',
  label: 'Label',
  value: '',
  onChange: null,
};

export default CheckBox;
