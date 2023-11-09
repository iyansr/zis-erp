import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon } from 'lucide-react';

const columnHelper = createColumnHelper();

export const bankColumns = [
  columnHelper.accessor('kodeBank', {
    header: () => <span>Kode Bank</span>,
  }),
  columnHelper.accessor('namaBank', {
    header: () => <span>Nama Bank</span>,
  }),
  columnHelper.accessor('effectiveDate', {
    header: () => <span>Tanggal Efektif</span>,
  }),
  columnHelper.accessor('group', {
    header: () => <span>Group Accont</span>,
  }),
  columnHelper.accessor('field1', {
    header: () => <span>Field 1</span>,
  }),
  columnHelper.accessor('field2', {
    header: () => <span>Field 2</span>,
  }),

  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: () => (
      <button className="btn btn-sm btn-outline text-sm normal-case border-accent text-accent">
        <EditIcon className="h-3 w-3" /> Edit Deskripsi Bank
      </button>
    ),
    enablePinning: true,
    size: 200,
  }),
];
