import { createColumnHelper } from '@tanstack/react-table';

import UpdateGLModal from './UpdateGLModal';

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
  columnHelper.accessor('gl_account_type.gla_type', {
    header: () => <span>Tipe GL Account</span>,
  }),
  columnHelper.accessor('gl_group', {
    header: () => <span>Group Account</span>,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info) => {
      const color = {
        active: 'success',
        inactive: 'error',
        blocked: 'warning',
      };

      return (
        <span className={`badge badge-${color[info.getValue()]} badge-md`}>{info.getValue()}</span>
      );
    },
  }),
  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: (info) => <UpdateGLModal data={info.row.original} key={info.row.original.id} />,
    enablePinning: true,
    size: 200,
  }),
];
