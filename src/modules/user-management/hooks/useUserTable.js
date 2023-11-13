import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { glGolumns } from '../components/column';

const defaultData = Array(20).fill({
  name: 'John Doe',
  role: 'Admin',
  created: '4 days ago',
  status: 'Active',
  action: '',
});

const useUserTable = () => {
  const table = useReactTable({
    data: defaultData,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useUserTable;
