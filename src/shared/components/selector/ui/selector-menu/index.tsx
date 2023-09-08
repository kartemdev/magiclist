import React from 'react';
import classNames from 'classnames';
import { IOption } from '../../types';

import './styles.scss';

interface IProps<T> {
  value: React.ReactNode;
  options: IOption<T>[];
  onChange: (option: IOption<T>) => void;
  placeholderEmptyOptions: string;
}

const SelectorMenu = <T, >(props: IProps<T>) => {
  const {
    value,
    options,
    onChange,
    placeholderEmptyOptions,
  } = props;

  return (
    <div className='magic-selector-menu'>
      <div className='magic-selector-menu__list'>
        {!!options?.length ? (options.map((option, index) => (
          <div 
            className={classNames('magic-selector-menu__list-item', {
              ['magic-selector-menu__list-active']: value === option.value,
            })}
            onClick={() => onChange(option)}
            key={index}
          >
            {option.label}
          </div>
        ))) : (
          <div className='magic-selector-menu__list-empty'>{placeholderEmptyOptions}</div>
        )}
      </div>
    </div>
  );
};

export default SelectorMenu;
