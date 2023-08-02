import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { ArrowHeadIcon } from 'assets';
import { useOutsideClick } from 'hooks';

import './styles.scss';

interface IOption {
  label: string,
  value: any,
};

interface IProps {
  selected?: IOption | null,
  options: IOption[],
  onChange?: (option: IOption) => void;
  label?: string;
  placeholderForEmpty?: string;
}

const Selector: React.FC<IProps> = (props) => {
  const {
    selected,
    options,
    onChange,
    label,
    placeholderForEmpty,
  } = props;

  const [selfSelected, setSelfSelected] = useState<IOption>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverOptionLabel, setHoverOptionLabel] = useState<string>(null);
  const ref = useRef(null);

  const uncontrolled = selected === undefined;
  const currentSelected = uncontrolled ? selfSelected : selected;

  useOutsideClick(ref, () => setIsOpen(false));

  const handleChange = (option: IOption) => {
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
}

Selector.defaultProps = {
  label: 'Label',
  placeholderForEmpty: 'Empty list',
};

export default Selector;
