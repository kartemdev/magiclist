import React from 'react';
import { CrossCancelIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalDialog: React.FC<IProps> = (props) => {
  const {
    title,
    children,
    onClose,
  } = props;

  return (
    <div className='ml-modal-dialog'>
      <div className='ml-modal-dialog__header'>
        <div className='ml-modal-dialog__header-title'>
          {title}
        </div>
        <CrossCancelIcon
          className='ml-modal-dialog__header-close'
          onClick={onClose}
        />
      </div>
      <div className='ml-modal-dialog__content'>
        {children}
      </div>
    </div>
  );
};

export default ModalDialog;
