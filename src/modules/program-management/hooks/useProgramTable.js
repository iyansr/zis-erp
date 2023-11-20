import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { glGolumns } from '../components/column';
import useProgram from './useProgram';

const useProgramTable = () => {
  const { data, ...rest } = useProgram();

  const programs = data?.data ?? [];

  const table = useReactTable({
    data: programs,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table, ...rest };
};

export default useProgramTable;
