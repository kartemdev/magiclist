import React, { useMemo, useState } from 'react';
import i18next from 'i18next';
import { IOption, Selector } from '~shared/components';
import { GlobaIcon } from '~shared/assets';
import { langsOptions } from '../lib';

import './styles.scss';

interface IProps {
  isTopPlacementMenu?: boolean;
}

const LangsSelector: React.FC<IProps> = ({ isTopPlacementMenu }) => {
  const [lang, setLang] = useState<IOption<string>>(null);

  const langSelectorOptions = langsOptions.map((lang) => ({ ...lang, label: window.translate(lang.label) }));

  const defaultValue = useMemo(() =>  (
    langSelectorOptions.find((option) => option.value === i18next.language)
  ), []);

  const handleLangSelectorChange = (option: IOption<string>) => {
    i18next.changeLanguage(option.value);

    const currentLangOption = langsOptions.find((lang) => option.value === lang.value);

    setLang({ ...option, label: window.translate(currentLangOption.label) })
  };

  return (
    <div className='langs-selector'>
      <GlobaIcon className='langs-selector__icon'/>
      <Selector
        options={langSelectorOptions}
        selected={lang}
        defaultValue={defaultValue}
        onChange={handleLangSelectorChange}
        isTopPlacementMenu={isTopPlacementMenu}
      />
    </div>
  );
};

LangsSelector.defaultProps = {
  isTopPlacementMenu: false,
};

export default LangsSelector;
