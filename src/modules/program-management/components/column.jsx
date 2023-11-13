import { createColumnHelper } from '@tanstack/react-table';
import { EditIcon, Trash } from 'lucide-react';

const columnHelper = createColumnHelper();

export const glGolumns = [
  columnHelper.accessor('thumbnail', {
    header: () => <span>Thumbnail</span>,
    cell: (info) => <img src={info.getValue()} alt="Thumbnail" className="w-28 aspect-video" />,
  }),
  columnHelper.accessor('filename', {
    header: () => <span>File Name</span>,
  }),
  columnHelper.accessor('link', {
    header: () => <span>Routing Link</span>,
    cell: (info) => (
      <a href={info.getValue()} target="_blank" rel="noreferrer">
        {info.getValue()}
      </a>
    ),
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
