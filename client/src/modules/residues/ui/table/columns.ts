import { createColumnHelper } from '@tanstack/react-table';

import { IResidueResponseDTO } from '~shared/api';
import { currencyFormat, dateFormat } from '~shared/lib';

const columnHelper = createColumnHelper<IResidueResponseDTO>();

const columns = [
  columnHelper.accessor('article', {
    header: window.translate('resiudes_table_article'),
  }),

  columnHelper.accessor('product', {
    header: window.translate('resiudes_table_product'),
  }),

  columnHelper.accessor('residue', {
    header: window.translate('resiudes_table_residue'),
  }),

  columnHelper.accessor('unitPrice', {
    header: window.translate('resiudes_table_unit_price'),
    cell: (unitPrice) => {
      const value = unitPrice.getValue();
      return value && currencyFormat(value);
    },
  }),

  columnHelper.accessor('createdAt', {
    header: window.translate('resiudes_table_created_date'),
    cell: (createdAt) => {
      const value = createdAt.getValue();
      return value && dateFormat(value);
    },
  }),
];

export default columns;
