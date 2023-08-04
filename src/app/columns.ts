import { createColumnHelper } from "@tanstack/react-table";

interface TableData {
  age: number,
  email: string,
  address: string
}

const getColumns = () => {
  const columnHelper = createColumnHelper<TableData | TableData[]>();
  return [
    columnHelper.accessor('address', {
      header: 'Адрес'
    }),
    columnHelper.accessor('email', {
      header: 'Почта'
    }),
    columnHelper.accessor('age', {
      header: 'Возраст'
    })
  ]
}

export default getColumns;
