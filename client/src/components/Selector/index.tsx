import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import ArrowHead from'static/icons/arrowhead.svg';
import { useOutsideClick } from '../../hooks';

import './styles.scss';

interface Option {
  label: string,
  value: any,
};

interface Props {
  selected?: Option,
  options: Option[],
  onChange?: (option: Option) => void;
  label?: string;
  placeholder?: string;
  placeholderForEmpty?: string;
}

const Selector: FC<Props> = (props) => {
  const {
    selected,
    options,
    onChange,
    label,
    placeholder,
    placeholderForEmpty,
  } = props;

  const [selfSelected, setSelfSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const uncontrolled = selected === undefined;
  const currentSelected = uncontrolled ? selfSelected : selected;

  useOutsideClick(ref, () => setIsOpen(false));

  const handleChange = (option: Option) => {
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
      })}
      ref={ref}
    >
      <div className='magic-selector__label'>{label}</div>
      <div className='magic-selector'>
        <div
          className='magic-selector__control'
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <div
            className='magic-selector__value'
            data-placeholder={placeholder}
          >
            {currentSelected?.label}
          </div>
          <div className='magic-selector__indicators'>
            <span className='magic-selector__indicators-separator' />
            <ArrowHead className='magic-selector__indicators-toggle' />
          </div>
        </div>
        {isOpen && (
          <div className='magic-selector__menu'>
            <div className='magic-selector__list'>
              {!!options?.length ? (options.map((option) => (
                <div 
                  className={classNames('magic-selector__list-item', {
                    ['magic-selector__list-active']: currentSelected?.value === option.value
                  })}
                  onClick={() => handleChange(option)}
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
}

Selector.defaultProps = {
  label: 'Label',
  placeholder: 'Choose',
  placeholderForEmpty: 'Empty list',
};

export default Selector;
