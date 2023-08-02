import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { CancelIcon } from 'assets'
import { usePortal } from 'hooks';

import './styles.scss';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const {
    isOpen,
    children,
    className,
    title,
    onClose,
  } = props;

  const ref = useRef(null)
  const Portal = usePortal(document.body);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={ref}
      timeout={500}
      unmountOnExit
      classNames='magic-modal'
    >
      <Portal>
          <div
            ref={ref}
            className={classNames('magic-modal', {
              [className]: className
            })}
            onMouseDown={onClose}   
          >
            <div 
              className='magic-modal__dialog'
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className='magic-modal__header'>
                <div className='magic-modal__header-title'>
                  {title}
                </div>
                <CancelIcon
                  className='magic-modal__header-close'
                  onClick={onClose}
                />
              </div>
              <div className='magic-modal__content'>
                {children}
              </div>
            </div>
          </div>
      </Portal>
    </CSSTransition>
  )
};

export default Modal;

Modal.defaultProps = {
  title: 'Header',
  className: '',
}
