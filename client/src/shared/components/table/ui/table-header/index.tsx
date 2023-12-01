import React, { useState } from 'react';
import classNames from 'classnames';
import type { Header, HeaderGroup } from '@tanstack/react-table'; 
import { flexRender } from '@tanstack/react-table';
import { Checkbox } from '~shared/components';
import { ArrowHeadFullIcon } from '~shared/assets';
import { SortOrder } from '~shared/lib';
import { ISortData } from '../../types';
import { getSortOrderClassNames } from '../../lib';

import './styles.scss';

interface IProps<T> {
  headerGroups: HeaderGroup<T>[];
  isCheckBoxSelect: boolean;
  checked: boolean;
  isSorted: boolean;
  onChangeCheckbox: () => void;
  onClickCell?: (sortData: ISortData<T>) => void;
}

const TableHeader = <T extends {}, >(props: IProps<T>) => {
  const {
    headerGroups,
    isCheckBoxSelect,
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
        sortType: 
          !sortData?.sortType ? SortOrder.ASC
            : sortData.sortType === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
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
        {(
          <ArrowHeadFullIcon
            className={classNames('ml-table-header__arrowhead', {
              ...getSortOrderClassNames(header.id, sortData),
            })}
          />
        )}
      </>
    );
  };

  return (
    <thead className='ml-table-header'>
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id} className='ml-table-header__row'>
          {isCheckBoxSelect && (
            <th
              className='ml-table-header__cell ml-table-header__checkbox'
              onClick={() => onChangeCheckbox()}
            >
              <Checkbox checked={checked} />
            </th>
          )}
          {headerGroup.headers.map(header => (
            <th
              key={header.id}
              className='ml-table-header__cell'
              onClick={() => handleClickCell(header)}
            >
              <div className='ml-table-header__cell-content' children={renderCell(header)} />
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
