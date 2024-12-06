import { Button, Modal } from '~shared/ui';
import { DesktopIcon } from '~shared/assets';

import './index.scss';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileUnavailFuncModal = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className='mobile-unavail-func-modal'
      title={window.translate('mobile_unavail_func_modal_title')}
    >
      <div className='mobile-unavail-func-modal__body'>
        <DesktopIcon className='mobile-unavail-func-modal__icon' />
        <span className='mobile-unavail-func-modal__text'>
          {window.translate('mobile_unavail_func_modal_text')}
        </span>
      </div>
      <div className='mobile-unavail-func-modal__footer'>
        <Button type='button' onClick={onClose} typeStyle='secondary'>
          {window.translate('mobile_unavail_func_modal_confirm')}
        </Button>
      </div>
    </Modal>
  );
};

export default MobileUnavailFuncModal;
