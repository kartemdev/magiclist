import { memo } from 'react';
import classNames from 'classnames';

import './button.ui.scss';

interface IProps {
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  typeStyle?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
  const {
    type = 'button',
    isDisabled = false,
    typeStyle = 'primary',
    className = '',
    children = 'Click',
    onClick = () => null,
  } = props;

  return (
    <div
      className={classNames('ml-button__block', {
        [className]: className,
      })}
    >
      <button
        className={classNames('ml-button', {
          [`ml-button__${typeStyle}`]: typeStyle,
        })}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default memo(Button);
