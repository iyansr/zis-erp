import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { glGolumns } from '../components/column';

const defaultData = Array(20).fill({
  thumbnail: 'https://api.zisindosat.id/public/uploads/1698106103317-Artboard 1.png',
  filename: '1698106103317-Artboard 1.png',
  link: 'https://portal.zisindosat.id/program/7',
  created: '4 days ago',
  status: 'Active',
  action: '',
});

const useProgramTable = () => {
  const table = useReactTable({
    data: defaultData,
    columns: glGolumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useProgramTable;
