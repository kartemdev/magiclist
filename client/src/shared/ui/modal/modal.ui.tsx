import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import { usePortal } from '~shared/hooks';

import ModalBackground from './modal-background';
import ModalDialog from './modal-dialog';

import './modal.ui.scss';

interface Props {
  isOpen: boolean;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const { isOpen, onClose, title = '', className = '', children = null } = props;

  const ref = useRef(null);
  const Portal = usePortal(document.body);

  return (
    <CSSTransition in={isOpen} nodeRef={ref} timeout={500} unmountOnExit classNames='ml-modal'>
      <Portal>
        <div
          ref={ref}
          className={classNames('ml-modal', {
            [className]: className,
          })}
        >
          <ModalBackground onClose={onClose} />
          <ModalDialog title={title} onClose={onClose}>
            {children}
          </ModalDialog>
        </div>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
