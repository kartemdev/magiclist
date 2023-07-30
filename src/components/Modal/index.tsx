import React, { useRef } from 'react';
import  ReactDOM  from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import CloseCross from 'static/icons/close-cross.svg'

import './styles.scss';
import classNames from 'classnames';

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

  const Portal = ({ children }: { children: React.ReactNode }) =>
    ReactDOM.createPortal(children, document.body); 

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
            onClick={onClose}   
          >
            <div 
              className='magic-modal__dialog'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='magic-modal__header'>
                <div className='magic-modal__header-title'>
                  {title}
                </div>
                <CloseCross
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
