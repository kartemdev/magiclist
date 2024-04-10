import classNames from 'classnames';
import { ArrowHeadIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  value: React.ReactNode;
  isTopPlacementMenu: boolean;
  toggle: () => void;
}

const SelectorControl: React.FC<IProps> = ({ value, isTopPlacementMenu, toggle }) => {
  return (
    <div className='ml-selector-control' onClick={toggle}>
      <div
        className='ml-selector-control__value'
      >
        {value}
      </div>
      <div className={classNames('ml-selector-control__indicators', {
        ['ml-selector-control__indicators-top-placement']: isTopPlacementMenu,
      })}>
        <span className='ml-selector-control__indicators-separator' />
        <ArrowHeadIcon className='ml-selector-control__indicators-toggle' />
      </div>
    </div>
  );
};

export default SelectorControl;
