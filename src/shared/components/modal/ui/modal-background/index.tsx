import React from 'react';

import './styles.scss';

interface IProps {
  onClose: () => void;
}

const ModalBackground: React.FC<IProps> = ({ onClose }) => {
  return (
    <div
      className='magic-modal magic-modal-background'
      onMouseDown={onClose}   
    />
  );
};

export default ModalBackground;
