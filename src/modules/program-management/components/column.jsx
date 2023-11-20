import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon, Trash } from 'lucide-react';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('banners.banners_path', {
    header: () => <span>Thumbnail</span>,
    cell: (info) => (
      <img
        src={`https://jittery-lion-tie.cyclic.app/public/${info.getValue()}`}
        alt="Thumbnail"
        className="w-28 aspect-video"
      />
    ),
  }),
  columnHelper.accessor('banners.banners_path', {
    header: () => <span>File Name</span>,
    size: 300,
  }),
  columnHelper.accessor('program_id', {
    header: () => <span>Routing Link</span>,
    cell: (info) => {
      const href = `https://portal.zisindosat.id/program/${info.getValue()}`;
      return (
        <a href={href} target="_blank" rel="noreferrer" className="underline">
          {href}
        </a>
      );
    },
  }),
  columnHelper.accessor('created', {
    header: () => <span>Created</span>,
  }),
  columnHelper.accessor('program_status', {
    header: () => <span>Status</span>,
    cell: (info) => {
      const status = info.getValue();
      const label = {
        1: 'InActive',
        2: 'Active',
      };

      return <span className="border border-slate-200 px-4 py-2 rounded-md">{label[status]}</span>;
    },
  }),

  columnHelper.accessor('action', {
    header: () => <span>Action</span>,
    cell: () => (
      <span className="flex items-center space-x-2">
        <input type="checkbox" className="toggle toggle-sm toggle-accent" defaultChecked />
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
