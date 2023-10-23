import React from 'react';
import classNames from 'classnames';
import { Row, flexRender } from '@tanstack/react-table';
import { Checkbox } from '~shared/ui';
import { IRow, ISelectedRows } from '../../types';

import './styles.scss';

interface IProps<T> {
  rowGroups: Row<T>[];
  isCheckBoxSelect: boolean;
  onChangeCheckbox: (row: IRow<T>) => void;
  selectedRows: ISelectedRows<T>;
  onChangeRows: (event: React.MouseEvent, row: IRow<T>) => void
}

const TableBody = <T extends {}, >(props: IProps<T>) => {
  const {
    rowGroups,
    isCheckBoxSelect,
    onChangeCheckbox,
    selectedRows,
    onChangeRows,
  } = props;

  return (
    <tbody className='ml-table-body'>
      {rowGroups.map(row => (
        <tr
          key={row.id}
          className={classNames('ml-table-body__row', {
            ['ml-table-body__row-active']: !!selectedRows[row.id]
          })}
          onClick={(event) => onChangeRows(event, {id: row.id, data: { ...row.original }})}
        >
          {isCheckBoxSelect && (
            <td
              data-type='checkbox'
              className='ml-table-body__cell ml-table-body__checkbox'
              onClick={() => onChangeCheckbox({id: row.id, data: { ...row.original }})}
            >
              <Checkbox checked={!!selectedRows[row.id]} />
            </td>
          )}
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className='ml-table-body__cell'>
              <div className='ml-table-body__cell-content'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
