import React from 'react';

import './styles.scss';

interface IProps {
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
  const {
    type,
    children,
    onClick,
  } = props;

  return (
    <div className='magic-button__block'>
      <button
        className='magic-button'
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
  children: 'Click',
};

export default Button;
