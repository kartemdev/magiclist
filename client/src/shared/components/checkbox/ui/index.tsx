import { forwardRef, memo, useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  name?: string;
  className?: string;
  label?: string;
  checked?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    name,
    className,
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
    <div className={classNames('ml-checkbox__block', {
      [className]: className,
    })}>
      <label className='ml-checkbox__label'>
        <input
          ref={ref}
          name={name}
          type='checkbox'
          checked={currentChecked}
          value={value}
          onChange={handleCheckedChange}
          onClick={(event) => event.stopPropagation()}
        />
        <span className='ml-checkbox' />
        {label}
      </label>
    </div>
  )
});

Checkbox.defaultProps = {
  name: '',
  className: '',
  label: '',
  value: '',
  onChange: null,
};

export default memo(Checkbox);
