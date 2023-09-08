import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useOutsideClick } from '~shared/hooks';
import SelectorControl from './selector-control';
import SelectorMenu from './selector-menu';
import { IOption } from '../types';

import './styles.scss';
interface IProps<T> {
  name?: string,
  selected?: IOption<T> | null,
  options: IOption<T>[],
  onChange?: (option: IOption<T>) => void;
  label?: string;
  placeholderEmptyOptions?: string;
}

const Selector = <T, >(props: IProps<T>) => {
  const {
    name,
    selected,
    options,
    onChange,
    label,
    placeholderEmptyOptions,
  } = props;

  const [selfSelected, setSelfSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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
      <div className='magic-selector' data-name={name} ref={ref}>
        <SelectorControl
          value={currentSelected?.label}
          toggle={() => setIsOpen((prevState) => !prevState)}
        />
        {isOpen && (
          <SelectorMenu
            options={options}
            value={currentSelected?.label}
            onChange={handleChange}
            placeholderEmptyOptions={placeholderEmptyOptions}
          />
        )}
      </div>
    </div>
  )
};

Selector.defaultProps = {
  name: '',
  label: '',
  placeholderEmptyOptions: 'Empty list',
};

export default Selector;
