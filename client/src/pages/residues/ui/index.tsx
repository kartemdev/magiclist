import { ResiduesTable } from '~modules/residues';

import './index.scss';

const ResiduesPage = () => {
  return (
    <div className='residues-page'>
      <div className='residues-page__wrapper'>
        <div className='residues-page__title'>{window.translate('residues_page_title')}</div>
        <ResiduesTable />
      </div>
    </div>
  );
};

export default ResiduesPage;
