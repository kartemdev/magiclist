import cloneDeep from "lodash.clonedeep";
import { IRow, ISelectedRows } from "../types";

export const getSelectedRows = <T, >(row: IRow<T>, isMultipleSelect: boolean, selectedRows: ISelectedRows<T>) => {
  let currentSelectedRows = (isMultipleSelect ? { ...selectedRows, [row.id]: row.data } : { [row.id]: row.data });

  if (selectedRows[row.id]) {
    currentSelectedRows = cloneDeep(selectedRows);
    delete currentSelectedRows[row.id];
  }

  return currentSelectedRows;
};
