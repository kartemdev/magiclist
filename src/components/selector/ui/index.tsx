import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { ArrowHeadIcon } from 'shared/assets';
import { useOutsideClick } from 'shared/hooks';
import { IOption } from '../types';

import './styles.scss';
interface IProps<T> {
  selected?: IOption<T> | null,
  options: IOption<T>[],
  onChange?: (option: IOption<T>) => void;
  label?: string;
  placeholderForEmpty?: string;
}

const Selector = <T, >(props: IProps<T>) => {
  const {
    selected,
    options,
    onChange,
    label,
    placeholderForEmpty,
  } = props;

  const [selfSelected, setSelfSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverOptionLabel, setHoverOptionLabel] = useState<string>(null);
  const ref = useRef(null);

  const uncontrolled = selected === undefined;
  const currentSelected: IOption<T> = uncontrolled ? selfSelected : selected;

  useOutsideClick(ref, () => setIsOpen(false));

  const handleChange = (option: IOption<T>) => {
    if (uncontrolled) {
      setSelfSelected(option);
    }

    if (onChange) {
      onChange(option);
    }

    setIsOpen(false);
  };

  return (
    <div
      className={classNames('magic-selector__block', {
        ['magic-selector__collapsed']: !isOpen,
        ['magic-selector__selected']: !!currentSelected?.value,
      })}
    >
      <div className='magic-selector__label'>{label}</div>
      <div className='magic-selector' ref={ref}>
        <div
          className='magic-selector__control'
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <div
            className='magic-selector__value'
            data-hover-item={hoverOptionLabel}
          >
            {currentSelected?.label}
          </div>
          <div className='magic-selector__indicators'>
            <span className='magic-selector__indicators-separator' />
            <ArrowHeadIcon className='magic-selector__indicators-toggle' />
          </div>
        </div>
        {isOpen && (
          <div className='magic-selector__menu'>
            <div className='magic-selector__list'>
              {!!options?.length ? (options.map((option) => (
                <div 
                  className={classNames('magic-selector__list-item', {
                    ['magic-selector__list-active']: currentSelected?.value === option.value,
                  })}
                  onClick={() => handleChange(option)}
                  onMouseEnter={() => setHoverOptionLabel(option.label)}
                  onMouseLeave={() => setHoverOptionLabel(null)}
                >
                  {option.label}
                </div>
              ))) : (
                <div className='magic-selector__list-empty'>{placeholderForEmpty}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

Selector.defaultProps = {
  label: '',
  placeholderForEmpty: 'Empty list',
};

export default Selector;
