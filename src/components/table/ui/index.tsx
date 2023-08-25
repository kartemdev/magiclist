import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import classNames from 'classnames';
import { Checkbox } from 'components';
import { SortOrder } from 'shared/enums';
import { ArrowHeadFullIcon } from 'shared/assets';
import { IRow, ISelectedRows, ISortData } from '../types';
import { getSortOrderClassNames, getSelectedRows } from '../utils';

import './styles.scss';

interface IProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  onChangeRow?: (data: T | T[]) => void;
  onClickRow?: (data: T) => void;
  onClickHeaderCell?: (sortData: ISortData<T>) => void;
  isCheckBoxSelect?: boolean;
  isMultipleSelect?: boolean;
}

const Table = <T extends {}, >(props: IProps<T>) => {
  const {
    data,
    columns,
    onChangeRow,
    onClickRow,
    onClickHeaderCell,
    isCheckBoxSelect,
    isMultipleSelect,
  } = props;

  const [selectedRows, setSelectedRows] = useState<ISelectedRows<T>>({});
  const [sortData, setSortData] = useState<ISortData<T>>(null);

  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleChangeRows = (event: React.MouseEvent, row: IRow<T>) => {
    const rowIsCheckbox = (event.target as Element).className.includes('checkbox');
    const currentSelectedRows = getSelectedRows(row, isMultipleSelect, selectedRows);

    if (!onClickRow) {
      setSelectedRows(currentSelectedRows);
    }

    if (onChangeRow && !onClickRow) {
      onChangeRow(Object.values(currentSelectedRows));
    }

    if (onClickRow && !rowIsCheckbox) {
      onClickRow(row.data);
    }
  };

  const handleChangeCBRows = (row: IRow<T>) => {
    const currentSelectedRows = getSelectedRows(row, isMultipleSelect, selectedRows);

    setSelectedRows(currentSelectedRows);

    if (onChangeRow) {
      onChangeRow(Object.values(currentSelectedRows));
    }
  };

  const handleChangeCBAllRows = () => {
    let selected = table.getRowModel().rows.reduce((acc, row) => ({ ...acc, [row.id]: row.original }), {});

    if (Object.keys(selectedRows).length === data?.length) {
      selected = [];
    }

    setSelectedRows(selected);

    if (onChangeRow) {
      onChangeRow(Object.values(selected));
    }
  };

  const handleClickHeaderCell = (headerCellId: string) => {
    const currentSortData: ISortData<T> = {
      fieldName: headerCellId as keyof T,
      sortType: 
        !sortData?.sortType ? SortOrder.ASC
          : sortData.sortType === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
    };

    setSortData(currentSortData);

    if (onClickHeaderCell) {
      onClickHeaderCell(currentSortData);
    }
  };

  return (
    <div className='magic-table__block'>
      <table className='magic-table'>
        <thead className='magic-table__header'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='magic-table__row'>
                {isCheckBoxSelect && (
                  <th
                    className='magic-table__cell magic-table__checkbox'
                    onClick={() => handleChangeCBAllRows()}
                  >
                    <Checkbox checked={Object.keys(selectedRows).length === data?.length} />
                  </th>
                )}
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className='magic-table__cell'
                    onClick={() => handleClickHeaderCell(header.id)}
                  >
                    <div className='magic-table__cell-content'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      <ArrowHeadFullIcon
                        className={classNames('magic-table__arrowhead', {
                          ...getSortOrderClassNames(header.id, sortData),
                        })}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='magic-table__body'>
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className={classNames('magic-table__row', {
                  ['magic-table__row-active']: selectedRows[row.id]
                })}
                onClick={(event) => handleChangeRows(event, {id: row.id, data: { ...row.original }})}
              >
                {isCheckBoxSelect && (
                  <td
                    data-type='checkbox'
                    className='magic-table__cell magic-table__checkbox'
                    onClick={() => handleChangeCBRows({id: row.id, data: { ...row.original }})}
                  >
                    <Checkbox checked={!!selectedRows[row.id]} />
                  </td>
                )}
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='magic-table__cell'>
                    <div className='magic-table__cell-content'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

Table.defaultProps = {
  onChangeRow: null,
  onClickRow: null,
  onClickHeaderCell: null,
  isMultipleSelect: false,
  isCheckBoxSelect: false,
}

export default Table;
