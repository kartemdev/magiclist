import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { getSelectedRows } from './utils.ui';
import { IRow, ISelectedRows, ISortData } from './types.ui';

import TableHeader from './table-header';
import TableBody from './table-body';

import './table.ui.scss';

interface IProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onChangeRow?: (data: T[]) => void;
  onClickRow?: (data: T) => void;
  onClickHeaderCell?: (sortData: ISortData<T>) => void;
  isCheckBoxSelect?: boolean;
  isMultipleSelect?: boolean;
  isSorted?: boolean;
}

const Table = <T extends {}>(props: IProps<T>) => {
  const {
    data,
    columns,
    isSorted = true,
    onClickRow = null,
    onChangeRow = null,
    onClickHeaderCell = null,
    isMultipleSelect = false,
    isCheckBoxSelect = false,
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

    if (onChangeRow && !onClickRow) {
      setSelectedRows(currentSelectedRows);
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
    let selected = table
      .getRowModel()
      .rows.reduce((acc, row) => ({ ...acc, [row.id]: row.original }), {});

    if (Object.keys(selectedRows).length === data?.length) {
      selected = [];
    }

    setSelectedRows(selected);

    if (onChangeRow) {
      onChangeRow(Object.values(selected));
    }
  };

  return (
    <div className='ml-table__block'>
      <table className='ml-table'>
        <TableHeader
          headerGroups={table.getHeaderGroups()}
          isCheckBoxSelect={isCheckBoxSelect}
          isMultipleSelect={isMultipleSelect}
          isSorted={isSorted}
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
  );
};

export default Table;
