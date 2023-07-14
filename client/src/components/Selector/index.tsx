import React, { FC, useState } from 'react';
import classNames from 'classnames';
import ArrowHead from'static/icons/arrowhead.svg';
import './styles.scss'

const Selector: FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('magic-selector', {
      ['magis-selector__collapsed']: !isOpen,
    })}>
     <div className='magic-selector__control'>
      <div className='magic-selector__value'></div>
      <div className='magic-selector__indicators'>
        <span className='magic-selector__indicators-separator' />
        <ArrowHead className='magic-selector__indicators-toggle' />
      </div>
     </div>
     <div className='magic-selector__menu'>
       {/* options */}
     </div>
    </div>
  )
}

export default Selector;
