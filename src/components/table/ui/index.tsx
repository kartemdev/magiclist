import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import classNames from 'classnames';
import cloneDeep from 'lodash.clonedeep';
import { Checkbox } from 'components';
import { ArrowHeadFullIcon } from 'assets';
import { IRow, ISelectedRows, ISortData } from '../domain';

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

  const getSelectedRows = (row: IRow<T>) => {
    let selected = (isMultipleSelect ? { ...selectedRows, [row.id]: row.data } : { [row.id]: row.data });

    if (selectedRows[row.id]) {
      selected = cloneDeep(selectedRows);
      delete selected[row.id];
    }

    return selected;
  };

  const handleChangeRows = (event: React.MouseEvent, row: IRow<T>) => {
    const rowIsCheckbox = (event.target as Element).className.includes('checkbox');

    if (!onClickRow) {
      setSelectedRows(getSelectedRows(row));
    }

    if (onChangeRow && !onClickRow) {
      onChangeRow(Object.values(getSelectedRows(row)));
    }

    if (onClickRow && !rowIsCheckbox) {
      onClickRow(row.data);
    }
  };

  const handleChangeCBRows = (row: IRow<T>) => {
    setSelectedRows(getSelectedRows(row));

    if (onChangeRow) {
      onChangeRow(Object.values(getSelectedRows(row)));
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
    const currentSortType: ISortData<T> = {
      fieldName: headerCellId as keyof T,
      sortType: !sortData?.sortType ? 'asc' : sortData.sortType === 'asc' ? 'desc' : 'asc',
    };

    setSortData(currentSortType);

    if (onClickHeaderCell) {
      onClickHeaderCell(currentSortType);
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
                          ['magic-table__arrowhead-asc']: sortData?.sortType === 'asc' && sortData?.fieldName === header.id,
                          ['magic-table__arrowhead-desc']: sortData?.sortType === 'desc' && sortData?.fieldName === header.id,
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
