import { useState } from 'react';
import type { Header, HeaderGroup } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import classNames from 'classnames';

import { SortOrders } from '~shared/lib';
import { Checkbox } from '~shared/ui';
import { ArrowHeadFullIcon } from '~shared/assets';

import { ISortData } from '../types.ui';
import { getSortOrderClassNames } from '../utils.ui';

import './index.scss';

interface IProps<T> {
  headerGroups: HeaderGroup<T>[];
  isCheckBoxSelect: boolean;
  isMultipleSelect: boolean;
  checked: boolean;
  isSorted: boolean;
  onChangeCheckbox: () => void;
  onClickCell?: (sortData: ISortData<T>) => void;
}

const TableHeader = <T extends {}>(props: IProps<T>) => {
  const {
    headerGroups,
    isCheckBoxSelect,
    isMultipleSelect,
    checked,
    isSorted,
    onChangeCheckbox,
    onClickCell,
  } = props;

  const [sortData, setSortData] = useState<ISortData<T>>(null);

  const handleClickCell = (header: Header<T, unknown>) => {
    if (isSorted && onClickCell) {
      const currentSortData: ISortData<T> = {
        fieldName: header.id as Key<T>,
        sortType: !sortData?.sortType
          ? SortOrders.ASC
          : sortData.sortType === SortOrders.ASC
            ? SortOrders.DESC
            : SortOrders.ASC,
      };

      setSortData(currentSortData);

      if (onClickCell) {
        onClickCell(currentSortData);
      }
    }
  };

  const renderCell = (header: Header<T, unknown>) => {
    const content = flexRender(header.column.columnDef.header, header.getContext());

    return (
      <>
        {header.isPlaceholder ? null : content}
        {
          <ArrowHeadFullIcon
            className={classNames('ml-table-header__arrowhead', {
              ...getSortOrderClassNames(header.id, sortData),
            })}
          />
        }
      </>
    );
  };

  return (
    <thead className='ml-table-header'>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className='ml-table-header__row'>
          {isCheckBoxSelect && (
            <th
              className='ml-table-header__cell ml-table-header__checkbox'
              onClick={() => onChangeCheckbox()}
            >
              {isMultipleSelect && <Checkbox checked={checked} />}
            </th>
          )}
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className='ml-table-header__cell'
              onClick={() => handleClickCell(header)}
            >
              <div className='ml-table-header__cell-content'>{renderCell(header)}</div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
