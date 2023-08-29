import cloneDeep from "lodash.clonedeep";
import { SortOrder } from "shared/enums";
import { IRow, ISelectedRows, ISortData } from "../types";

export const getSelectedRows = <T, >(row: IRow<T>, isMultipleSelect: boolean, selectedRows: ISelectedRows<T>) => {
  let currentSelectedRows = (isMultipleSelect ? { ...selectedRows, [row.id]: row.data } : { [row.id]: row.data });

  if (selectedRows[row.id]) {
    currentSelectedRows = cloneDeep(selectedRows);
    delete currentSelectedRows[row.id];
  }

  return currentSelectedRows;
};

export const getSortOrderClassNames = <T, >(id: string, sortData: ISortData<T>) => {
  if (sortData) {
    const { sortType, fieldName } = sortData;

    return {
      ['magic-table__arrowhead-asc']: sortType === SortOrder.ASC && fieldName === id,
      ['magic-table__arrowhead-desc']: sortType === SortOrder.DESC && fieldName === id,
    }
  }
};
