import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import { glGolumns } from '../components/column';
import useQueryUsers from './useQueryUsers';

const useUserTable = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, ...rest } = useQueryUsers({
    q: columnFilters.find((filter) => filter.id === 'user_nama')?.value,
    user_type: columnFilters.find((filter) => filter.id === 'user_type')?.value,
    page: pageIndex + 1,
    perPage: pageSize,
  });

  const users = useMemo(() => data?.data || [], [data]);
  const total = useMemo(() => data?.meta?.total || 0, [data]);
  const pageCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const table = useReactTable({
    data: users,
    pageCount: pageCount,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    manualPagination: true,
    manualSorting: true,
  });

  return { table, ...rest };
};

export default useUserTable;
