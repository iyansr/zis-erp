import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { glGolumns } from '../components/column';
import useQueryUsers from './useQueryUsers';

const useUserTable = () => {
  const { data } = useQueryUsers();

  const users = data?.data || [];

  const table = useReactTable({
    data: users,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useUserTable;
