import { useEffect } from 'react';
import classNames from 'classnames';

import { usePortal } from '~shared/hooks';

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
  const Portal = usePortal(document.body);

  useEffect(() => {
    document.body.style.setProperty('--preloader--size', `${size}px`);
    document.body.style.setProperty('--preloader--thickness', `${thickness}px`);
    document.body.style.setProperty('--preloader-typestyle', typeStyle);
  }, []);

  const renderPreloader = () => (
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

  return isFullScreen ? (
    <Portal>
      {renderPreloader()}
    </Portal>
  ) : (
    renderPreloader()
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
