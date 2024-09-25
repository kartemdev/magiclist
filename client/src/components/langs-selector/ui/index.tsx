import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';

import { IOption, Selector } from '~shared/ui';
import { GlobalIcon } from '~shared/assets';

import { LANGS_OPTIONS } from '../model';

import './index.scss';

interface IProps {
  isTopPlacementMenu?: boolean;
}

const LangsSelector: React.FC<IProps> = ({ isTopPlacementMenu = false }) => {
  const navigate = useNavigate();

  const langSelectorOptions = LANGS_OPTIONS.map((lang) => ({
    ...lang,
    label: window.translate(lang.label),
  }));

  const defaultValue = useMemo(
    () => langSelectorOptions.find((option) => option.value === i18next.language),
    [],
  );

  const handleLangSelectorChange = (option: IOption<string>) => {
    localStorage.setItem('language-ml', option.value);
    navigate(0);
  };

  return (
    <div className='langs-selector'>
      <GlobalIcon className='langs-selector__icon' />
      <Selector
        defaultValue={defaultValue}
        options={langSelectorOptions}
        onChange={handleLangSelectorChange}
        isTopPlacementMenu={isTopPlacementMenu}
      />
    </div>
  );
};

export default LangsSelector;
