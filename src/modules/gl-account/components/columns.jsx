import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon } from 'lucide-react';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('gl_account', {
    header: () => <span>G/L Account</span>,
  }),
  columnHelper.accessor('gl_name', {
    header: () => <span>Nama GL</span>,
  }),
  columnHelper.accessor('description', {
    header: () => <span>Penjelasan Singkat</span>,
  }),
  columnHelper.accessor('coa', {
    header: () => <span>COA</span>,
  }),
  columnHelper.accessor('gl_type', {
    header: () => <span>Tipe GL Account</span>,
  }),
  columnHelper.accessor('gl_group', {
    header: () => <span>Group Account</span>,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info) => (
      <span className="badge badge-success badge-md text-white">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: (info) => (
      <button
        key={info.row.original.id}
        className="btn btn-sm btn-outline text-sm normal-case border-accent text-accent"
      >
        <EditIcon className="h-3 w-3" /> Edit GL Account
      </button>
    ),
    enablePinning: true,
    size: 200,
  }),
];
