import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import { glGolumns } from '../components/column';
import useProgram from './useProgram';

const useProgramTable = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, ...rest } = useProgram({
    keyword: columnFilters.find((filter) => filter.id === 'program_title')?.value,
    page: pageIndex + 1,
    perPage: pageSize,
  });

  const programs = useMemo(() => data?.data || [], [data]);

  const total = useMemo(() => data?.meta?.total || 0, [data]);
  const pageCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const table = useReactTable({
    data: programs,
    columns: glGolumns,
    pageCount,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    manualPagination: true,
    manualFiltering: true,
  });

  return { table, ...rest };
};

export default useProgramTable;
