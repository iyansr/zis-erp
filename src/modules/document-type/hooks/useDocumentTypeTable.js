import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';

import useTableState from '@/modules/shared/hooks/useTableState';

import { documentTypeColumn } from '../components/columns';
import useQueryDocumentTypes from './useQueryDocumentTypes';

const useDocumentTypeTable = () => {
  const { pageIndex, pageSize, setPagination } = useTableState();

  const { data: dt, ...rest } = useQueryDocumentTypes({
    page: pageIndex + 1,
    perPage: pageSize,
  });

  const data = useMemo(() => dt?.data || [], [dt]);

  const total = useMemo(() => dt?.meta?.total || 0, [dt]);
  const pageCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const table = useReactTable({
    data,
    pageCount,
    columns: documentTypeColumn,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: setPagination,
    manualPagination: true,
  });

  return { table, ...rest };
};

export default useDocumentTypeTable;
