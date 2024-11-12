import { Preloader, Table } from '~shared/ui';

import { useGetResiduesMock } from '~services/residues';

import columns from './columns';

import './index.scss';

const ResiduesTable = () => {
  const { data, isFetching } = useGetResiduesMock();

  return (
    <div className='residue-table'>
      {isFetching && <Preloader isFullScreen />}
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ResiduesTable;
