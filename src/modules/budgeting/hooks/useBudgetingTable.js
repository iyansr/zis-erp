import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { budgetingColumn } from '../components/BudgetingColumn';

const defaultData = Array(20).fill({
  yearOn: '2023',
  yearReport: '2022',
  approvalStatus: 'Draft',
  companyCode: '100004441',
  supplier: 'Sorali',
  overdueItems: 'Overdue',
  reportDate: 'Jun 30, 2021',
  currency: 'IDR',
  netAmount: '19.000.000',
  status: 'Sent',
});

const useBudgetingTable = () => {
  const table = useReactTable({
    data: defaultData,
    columns: budgetingColumn,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};

export default useBudgetingTable;
