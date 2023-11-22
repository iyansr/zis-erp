import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';

import DetailProgramModal from './DetailProgramModal';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('user.mustahiq_id', {
    header: () => <span>Mustahiq ID</span>,
  }),
  columnHelper.accessor('user.user_nama', {
    header: () => <span>Nama Mustahiq</span>,
    size: 300,
  }),
  columnHelper.accessor('program_category.name', {
    header: () => <span>Tujuan Proposal</span>,
    cell: (info) => {
      return (
        <span className="border border-slate-200 px-4 py-2 rounded-md">
          {info.getValue() || '-'}
        </span>
      );
    },
  }),
  columnHelper.accessor('program_create', {
    header: () => <span>Tanggal Submit</span>,
    cell: (info) => {
      return format(new Date(info.getValue()), 'dd/MM/yyyy');
    },
  }),
  columnHelper.accessor('user.mustahiq.bank_number', {
    header: () => <span>Nomor Rekening</span>,
  }),
  columnHelper.accessor('program_id', {
    header: () => <span>Subdomain Proposal</span>,
    cell: (info) => {
      const href = `https://portal.zisindosat.id/program/${info.getValue()}`;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {href}
        </a>
      );
    },
    size: 300,
  }),
  columnHelper.accessor('program_status', {
    header: () => <span>Status</span>,
    size: 300,
    cell: (info) => {
      const status = info.getValue();
      const label = {
        0: 'Ditolak',
        1: 'Menunggu Persetujuan',
        2: 'Active',
      };

      return <span className="border border-slate-200 px-4 py-2 rounded-md">{label[status]}</span>;
    },
  }),

  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: (info) => (
      <span className="flex items-center space-x-2" key={info.row.original.program_id}>
        <DetailProgramModal data={info.row.original} />
      </span>
    ),
    enablePinning: true,
    size: 200,
  }),
];
