import { SortOrder } from "~shared/enums";
import { ISortData } from "../types";

export const getSortOrderClassNames = <T, >(id: string, sortData: ISortData<T>) => {
  if (sortData) {
    const { sortType, fieldName } = sortData;

    return {
      ['magic-table__arrowhead-asc']: sortType === SortOrder.ASC && fieldName === id,
      ['magic-table__arrowhead-desc']: sortType === SortOrder.DESC && fieldName === id,
    }
  }
};
