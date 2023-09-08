import React, { forwardRef } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  label?: string;
  error?: string;
  className?: string;
  children?: React.ReactNode;
};

const InputBlock = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const {
    label,
    error,
    className,
    children,
  } = props;

  return (
    <div className={classNames('magic-input__block', {
      [className]: className,
    })}>
      {label && (
        <div className='magic-input__label'>{label}</div>
      )}
      {children}
      {error && (
        <div className='magic-input__error'>{error}</div>
      )}
    </div>
  );
});

InputBlock.defaultProps = {
  label: '',
  error: '',
  className: '',
  children: null,
};

export default InputBlock;

