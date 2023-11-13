import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon, Trash } from 'lucide-react';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('name', {
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('role', {
    header: () => <span>Role</span>,
  }),
  columnHelper.accessor('created', {
    header: () => <span>Created</span>,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info) => (
      <span className="border border-slate-200 px-4 py-2 rounded-md">{info.getValue()}</span>
    ),
  }),

  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: () => (
      <span>
        <button className="btn btn-sm btn-ghost text-sm normal-case text-neutral">
          <EditIcon className="h-3 w-3" />
        </button>
        <button className="btn btn-sm btn-ghost text-sm normal-case text-neutral">
          <Trash className="h-3 w-3" />
        </button>
      </span>
    ),
    enablePinning: true,
    size: 200,
  }),
];
