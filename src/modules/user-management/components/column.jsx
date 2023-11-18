import { createColumnHelper } from '@tanstack/react-table';

import DeleteAccessModal from './DeleteAccessModal';
import EditUserModal from './EditUserModal';
import ToggleUserActive from './ToggleUserActive';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('user_nama', {
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('type.user_type_name', {
    header: () => <span>Role</span>,
  }),

  columnHelper.accessor('user_status', {
    header: () => <span>Status</span>,
    cell: (info) => (
      <span className="border border-slate-200 px-4 py-2 rounded-md">
        {info.getValue() === 1 ? 'Verified' : 'No Verified'}
      </span>
    ),
  }),

  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: (info) => {
      return (
        <span className="flex items-center">
          <ToggleUserActive data={info.row.original} />
          <EditUserModal data={info.row.original} />
          <DeleteAccessModal data={info.row.original} />
        </span>
      );
    },
    enablePinning: true,
    size: 75,
  }),
];
