import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon } from 'lucide-react';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('glAccount', {
    header: () => <span>G/L Account</span>,
  }),
  columnHelper.accessor('shortText', {
    header: () => <span>Short Text</span>,
  }),
  columnHelper.accessor('accounts', {
    header: () => <span>Charts of Accounts</span>,
  }),
  columnHelper.accessor('type', {
    header: () => <span>Tipe G/L Accont</span>,
  }),
  columnHelper.accessor('group', {
    header: () => <span>Group Accont</span>,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info) => (
      <span className="badge badge-success badge-md text-white">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: () => (
      <button className="btn btn-sm btn-outline text-sm normal-case border-accent text-accent">
        <EditIcon className="h-3 w-3" /> Edit GL Account
      </button>
    ),
    enablePinning: true,
    size: 200,
  }),
];
