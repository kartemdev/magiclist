import React from 'react';
import { ArrowHeadIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  value: React.ReactNode;
  toggle: () => void;
}

const SelectorControl: React.FC<IProps> = ({ value, toggle }) => {
  return (
    <div className='magic-selector-control' onClick={toggle}>
      <div
        className='magic-selector-control__value'
      >
        {value}
      </div>
      <div className='magic-selector-control__indicators'>
        <span className='magic-selector-control__indicators-separator' />
        <ArrowHeadIcon className='magic-selector-control__indicators-toggle' />
      </div>
    </div>
  );
};

export default SelectorControl;
