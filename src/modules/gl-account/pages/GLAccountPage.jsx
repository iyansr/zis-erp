import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import TableInstance from '../../shared/components/TableInstance';
import useGLTable from '../hooks/useGLTable';

const GLAccountPage = () => {
  const table = useGLTable();

  return (
    <div className="p-10">
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li className="text-accent">
            <Link to="/dashboard">Buat dan Kelola Master Data</Link>
          </li>
          <li>
            <Link to="/dashboard/master-data">Master Data</Link>
          </li>
          <li>G/L Account</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">Selamat Datang</h2>
          <button className="btn btn-accent btn-md text-white normal-case">
            <PlusIcon /> Buat GL Account Baru
          </button>
        </div>

        <h4 className="text-xl text-zinc-500">Mulai masukkan Data untuk menampilkan akun GL</h4>
      </div>

      <div className="grid grid-cols-6 gap-4 my-6">
        <div>
          <label htmlFor="search" className="opacity-0">
            search
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="input input-bordered w-full input-sm"
          />
        </div>
        <div>
          <label htmlFor="glAcoounts" className="text-sm">
            G/L Accounts
          </label>
          <input
            type="text"
            name="glAcoounts"
            id="glAcoounts"
            className="input input-bordered w-full input-sm"
          />
        </div>
        <div>
          <label htmlFor="type" className="text-sm">
            Tipe Accounts
          </label>
          <input
            type="text"
            name="type"
            id="type"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div>
          <label htmlFor="view" className="text-sm">
            Tampilan / View
          </label>
          <input
            type="text"
            name="view"
            id="view"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div className="flex mt-auto mb-1">
          <button className="btn btn-xs btn-primary text-white">Go</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <TableInstance table={table} />
      </div>
      <div className="flex justify-end">
        <div className="join">
          <button className="join-item btn btn-ghost">«</button>
          <button className="join-item btn btn-ghost">1 of 20</button>
          <button className="join-item btn btn-ghost">»</button>
        </div>
      </div>
    </div>
  );
};

export default GLAccountPage;
