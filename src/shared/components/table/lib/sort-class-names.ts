import { SortOrder } from "~shared/enums";
import { ISortData } from "../types";

export const getSortOrderClassNames = <T, >(id: string, sortData: ISortData<T>) => {
  if (sortData) {
    const { sortType, fieldName } = sortData;

    return {
      ['ml-table-header__arrowhead-asc']: sortType === SortOrder.ASC && fieldName === id,
      ['ml-table-header__arrowhead-desc']: sortType === SortOrder.DESC && fieldName === id,
    }
  }
};
