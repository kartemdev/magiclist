import React, { useState } from 'react';
import classNames from 'classnames';
import { HeaderGroup, flexRender } from '@tanstack/react-table';
import { Checkbox } from '~shared/ui';
import { ArrowHeadFullIcon } from '~shared/assets';
import { SortOrder } from '~shared/enums';
import { ISortData } from '../../types';
import { getSortOrderClassNames } from '../../lib';

import './styles.scss';

interface IProps<T> {
  headerGroups: HeaderGroup<T>[];
  isCheckBoxSelect: boolean;
  checked: boolean;
  onChangeCheckbox: () => void;
  onClickCell?: (sortData: ISortData<T>) => void;
}

const TableHeader = <T extends {}, >(props: IProps<T>) => {
  const {
    headerGroups,
    isCheckBoxSelect,
    checked,
    onChangeCheckbox,
    onClickCell,
  } = props;

  const [sortData, setSortData] = useState<ISortData<T>>(null);

  const handleClickCell = (headerCellId: string) => {
    const currentSortData: ISortData<T> = {
      fieldName: headerCellId as keyof T,
      sortType: 
        !sortData?.sortType ? SortOrder.ASC
          : sortData.sortType === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
    };

    setSortData(currentSortData);

    if (onClickCell) {
      onClickCell(currentSortData);
    }
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
              onClick={() => handleClickCell(header.id)}
            >
              <div className='ml-table-header__cell-content'>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                <ArrowHeadFullIcon
                  className={classNames('ml-table-header__arrowhead', {
                    ...getSortOrderClassNames(header.id, sortData),
                  })}
                />
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
