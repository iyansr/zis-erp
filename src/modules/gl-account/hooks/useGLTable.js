import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { glGolumns } from '../components/columns';

const defaultData = Array(20).fill({
  glAccount: '100004',
  shortText: 'linsley',
  accounts: 'YCOA',
  type: 'Pendapatan Utama',
  group: 'ERG.',
  status: 'Active',
  action: '',
});

const useGLTable = () => {
  const table = useReactTable({
    data: defaultData,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useGLTable;
