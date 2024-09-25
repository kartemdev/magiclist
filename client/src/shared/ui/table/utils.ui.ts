import cloneDeep from 'lodash.clonedeep';

import { SortOrders } from '~shared/lib';

import { IRow, ISelectedRows, ISortData } from './types.ui';

export const getSelectedRows = <T>(
  row: IRow<T>,
  isMultipleSelect: boolean,
  selectedRows: ISelectedRows<T>,
) => {
  let currentSelectedRows = isMultipleSelect
    ? { ...selectedRows, [row.id]: row.data }
    : { [row.id]: row.data };

  if (selectedRows[row.id]) {
    currentSelectedRows = cloneDeep(selectedRows);
    delete currentSelectedRows[row.id];
  }

  return currentSelectedRows;
};

export const getSortOrderClassNames = <T>(id: string, sortData: ISortData<T>) => {
  if (sortData) {
    const { sortType, fieldName } = sortData;

    return {
      ['ml-table-header__arrowhead-asc']: sortType === SortOrders.ASC && fieldName === id,
      ['ml-table-header__arrowhead-desc']: sortType === SortOrders.DESC && fieldName === id,
    };
  }
};
