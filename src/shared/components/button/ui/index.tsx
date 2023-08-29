import React from 'react';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  type?: 'submit' | 'reset' | 'button';
  typeStyle?: string;
  className?: string;
  children?: React.ReactNode | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
  const {
    type,
    typeStyle,
    className,
    children,
    onClick,
  } = props;

  return (
    <div className={classNames('magic-button__block', {
      [className]: className
    })}>
      <button
        className={classNames('magic-button', {
          [`magic-button__${typeStyle}`]: typeStyle,
        })}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
};

Button.defaultProps = {
  type: 'button',
  typeStyle: 'primary',
  className: '',
  children: 'Click',
  onClick: () => null,
};

export default Button;
