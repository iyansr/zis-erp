import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import TableInstance from '@/modules/shared/components/TableInstance';

import useBankTable from '../hooks/useBankTable';

const BankMasterDataPage = () => {
  const table = useBankTable();

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
            <PlusIcon /> Daftarkan Bank Baru
          </button>
        </div>

        <h4 className="text-xl text-zinc-500">
          Lihat keseluruhan data bank yang terdaftar di Ziswaf Indosat
        </h4>
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
          <label htmlFor="bankName" className="text-sm">
            Nama Bank
          </label>
          <input
            type="text"
            name="bankName"
            id="bankName"
            className="input input-bordered w-full input-sm"
          />
        </div>
        <div>
          <label htmlFor="kodeBank" className="text-sm">
            Kode Bank
          </label>
          <input
            type="text"
            name="kodeBank"
            id="kodeBank"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div>
          <label htmlFor="groupAccount" className="text-sm">
            Grup Akun
          </label>
          <input
            type="text"
            name="groupAccount"
            id="groupAccount"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div>
          <label htmlFor="field1" className="text-sm">
            Field 1
          </label>
          <input
            type="text"
            name="field1"
            id="field1"
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

export default BankMasterDataPage;
