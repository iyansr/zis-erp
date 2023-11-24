import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';

import useTableState from '@/modules/shared/hooks/useTableState';

import { glGolumns } from '../components/columns';
import useQueryGLAccount from './useQueryGLAccount';

const useGLTable = () => {
  const { columnFilters, pageIndex, pageSize, setColumnFilters, setPagination } = useTableState();

  const { data, ...rest } = useQueryGLAccount({
    page: pageIndex + 1,
    perPage: pageSize,
  });

  const glAccounts = useMemo(() => data?.data || [], [data]);

  const total = useMemo(() => data?.meta?.total || 0, [data]);
  const pageCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const table = useReactTable({
    data: glAccounts,
    pageCount,
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
    manualFiltering: true,
    manualPagination: true,
  });

  return { table, ...rest };
};

export default useGLTable;
