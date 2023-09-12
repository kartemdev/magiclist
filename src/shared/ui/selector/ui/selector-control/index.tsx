import React from 'react';
import { ArrowHeadIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  value: React.ReactNode;
  toggle: () => void;
}

const SelectorControl: React.FC<IProps> = ({ value, toggle }) => {
  return (
    <div className='ml-selector-control' onClick={toggle}>
      <div
        className='ml-selector-control__value'
      >
        {value}
      </div>
      <div className='ml-selector-control__indicators'>
        <span className='ml-selector-control__indicators-separator' />
        <ArrowHeadIcon className='ml-selector-control__indicators-toggle' />
      </div>
    </div>
  );
};

export default SelectorControl;
