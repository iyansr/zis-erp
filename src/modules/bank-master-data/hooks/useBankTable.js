import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { bankColumns } from '../components/columns';

const defaultData = Array(20).fill({
  kodeBank: '100004',
  namaBank: 'linsley',
  effectiveDate: 'YCOA',
  type: 'Pendapatan Utama',
  group: 'ERG.',
  field1: 'Bank Mayoritas',
  field2: 'Limit Tinggi',
});

const useBankTable = () => {
  const table = useReactTable({
    data: defaultData,
    columns: bankColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useBankTable;
