import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const budgetingColumn = [
  columnHelper.accessor('yearOn', {
    header: () => <span>Year On</span>,
    cell: (data) => <span className="font-semibold text-primary">{data.getValue()}</span>,
  }),
  columnHelper.accessor('yearReport', {
    header: () => <span>Year Report</span>,
    cell: (data) => <span className="font-semibold text-primary">{data.getValue()}</span>,
  }),
  columnHelper.accessor('approvalStatus', {
    header: () => <span>Approval Status</span>,
    cell: (data) => <span className="badge badge-warning">{data.getValue()}</span>,
  }),
  columnHelper.accessor('companyCode', {
    header: () => <span>Company Code</span>,
  }),
  columnHelper.accessor('supplier', {
    header: () => <span>Supplier</span>,
    cell: (data) => <span className="font-semibold">{data.getValue()}</span>,
  }),
  columnHelper.accessor('overdueItems', {
    header: () => <span>Overdue Items</span>,
  }),
  columnHelper.accessor('reportDate', {
    header: () => <span>Report Date Release</span>,
  }),
  columnHelper.accessor('currency', {
    header: () => <span>Currency</span>,
  }),
  columnHelper.accessor('netAmount', {
    header: () => <span>Net Amount</span>,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (data) => <span className="badge badge-ghost">{data.getValue()}</span>,
  }),
];
