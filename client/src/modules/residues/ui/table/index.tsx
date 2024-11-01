import { Table } from '~shared/ui';

import { useGetResiduesMock } from '~services/residues';

import columns from './columns';

import './index.scss';

const ResiduesTable = () => {
  const { data } = useGetResiduesMock();

  return (
    <div className='residue-table'>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ResiduesTable;
