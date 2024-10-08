import classNames from 'classnames';

import { IOption } from '../types.ui';

import './index.scss';

interface IProps<T> {
  value: React.ReactNode;
  options: IOption<T>[];
  onChange: (option: IOption<T>) => void;
  placeholderEmptyOptions: string;
  isTopPlacementMenu: boolean;
}

const SelectorMenu = <T,>(props: IProps<T>) => {
  const { value, options, onChange, isTopPlacementMenu, placeholderEmptyOptions } = props;

  return (
    <div
      className={classNames('ml-selector-menu', {
        ['ml-selector-menu__top-placement']: isTopPlacementMenu,
      })}
    >
      <div className='ml-selector-menu__list'>
        {options?.length ? (
          options.map((option, index) => (
            <div
              className={classNames('ml-selector-menu__list-item', {
                ['ml-selector-menu__list-active']: value === option.label,
              })}
              onClick={() => onChange(option)}
              key={index}
            >
              {option.label}
            </div>
          ))
        ) : (
          <div className='ml-selector-menu__list-empty'>{placeholderEmptyOptions}</div>
        )}
      </div>
    </div>
  );
};

export default SelectorMenu;
