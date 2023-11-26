import { createColumnHelper } from '@tanstack/react-table';

import UpdateDocumentTypeModal from './UpdateDocumentTypeModal';

const columnHelper = createColumnHelper();

export const documentTypeColumn = [
  columnHelper.accessor('posting_key', {
    header: () => <span>Posting Key</span>,
  }),
  columnHelper.accessor('indicator', {
    header: () => <span>D/C Indicator</span>,
  }),
  columnHelper.accessor('account_type', {
    header: () => <span>Tipe Akun</span>,
  }),
  columnHelper.accessor('user.user_nama', {
    header: () => <span>Dibuat Oleh</span>,
  }),
  columnHelper.accessor('created_at', {
    header: () => <span>Tanggal Dibuat</span>,
  }),
  columnHelper.accessor('description1', {
    header: () => <span>Deskripsi 1</span>,
  }),
  columnHelper.accessor('description2', {
    header: () => <span>Deskripsi 1</span>,
  }),
  columnHelper.accessor('description3', {
    header: () => <span>Deskripsi 1</span>,
  }),
  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: (info) => <UpdateDocumentTypeModal data={info.row.original} key={info.row.original.id} />,
    enablePinning: true,
    size: 220,
  }),
];
