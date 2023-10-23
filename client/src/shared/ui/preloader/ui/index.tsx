import React, { useEffect } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface IProps {
  size?: number;
  thickness?: number; 
  isFullScreen?: boolean;
  textContent?: string;
  typeStyle?: 'primary' | 'secondary';
}

const Preloader: React.FC<IProps> = (props) => {
  const {
    size,
    thickness,
    isFullScreen,
    textContent,
    typeStyle,
  } = props;

  useEffect(() => {
    const preloaderElement = document.querySelector('.ml-preloader__block') as HTMLElement;
    
    preloaderElement.style.setProperty('--preloader--size', `${size}px`);
    preloaderElement.style.setProperty('--preloader--thickness', `${thickness}px`);
    preloaderElement.style.setProperty('--preloader-typestyle', typeStyle);
  }, []);

  return (
    <div className={classNames('ml-preloader__block', {
      ['ml-preloader__block-full']: isFullScreen,
    })}>
      <span className={classNames('ml-preloader', {
        ['ml-preloader__primary']: typeStyle === 'primary',
        ['ml-preloader__secondary']: typeStyle === 'secondary',
      })}></span>
        {textContent && (
          <div className='ml-preloader__text-content'>
            {textContent}
          </div>
        )}
    </div>
  );
};

Preloader.defaultProps = {
  size: 50,
  thickness: 10,
  isFullScreen: false,
  textContent: null,
  typeStyle: 'primary',
}

export default Preloader;
