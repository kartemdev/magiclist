import React, { useState } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { IRow, ISelectedRows, ISortData } from '../types';
import { getSelectedRows } from '../lib';
import TableHeader from './table-header';
import TableBody from './table-body';

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

  const handleChangeCheckbox = (row: IRow<T>) => {
    const currentSelectedRows = getSelectedRows(row, isMultipleSelect, selectedRows);

    setSelectedRows(currentSelectedRows);

    if (onChangeRow) {
      onChangeRow(Object.values(currentSelectedRows));
    }
  };

  const handleChangeCheckboxAll = () => {
    let selected = table.getRowModel().rows.reduce((acc, row) => ({ ...acc, [row.id]: row.original }), {});

    if (Object.keys(selectedRows).length === data?.length) {
      selected = [];
    }

    setSelectedRows(selected);

    if (onChangeRow) {
      onChangeRow(Object.values(selected));
    }
  };

  return (
    <div className='magic-table__block'>
      <table className='magic-table'>
        <TableHeader
          headerGroups={table.getHeaderGroups()}
          isCheckBoxSelect={isCheckBoxSelect}
          checked={Object.keys(selectedRows).length === data?.length}
          onChangeCheckbox={handleChangeCheckboxAll}
          onClickCell={onClickHeaderCell}
        />
        <TableBody
          rowGroups={table.getRowModel().rows}
          isCheckBoxSelect={isCheckBoxSelect}
          onChangeCheckbox={handleChangeCheckbox}
          selectedRows={selectedRows}
          onChangeRows={handleChangeRows}
        />
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
