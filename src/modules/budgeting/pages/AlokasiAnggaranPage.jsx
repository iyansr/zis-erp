import { PlusIcon } from 'lucide-react';

import TableInstance from '@/modules/shared/components/TableInstance';

import useBudgetingTable from '../hooks/useBudgetingTable';

const AlokasiAnggaranPage = () => {
  const table = useBudgetingTable();

  return (
    <div className="p-10">
      <div className="mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <h2 className="font-semibold text-2xl">Alokasi Anggaran</h2>
          </div>
          <button className="btn btn-accent btn-sm text-white normal-case">
            <PlusIcon /> Buat Anggaran
          </button>
          <button className="btn btn-accent btn-sm btn-outline text-white normal-case">
            Salin
          </button>
          <button className="btn btn-accent btn-sm btn-outline text-white normal-case">
            Hasilkan Laporan Anggaran
          </button>
        </div>
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
          <label htmlFor="noAkun" className="text-sm">
            Nomor Akun
          </label>
          <input
            type="text"
            name="noAkun"
            id="noAkun"
            className="input input-bordered w-full input-sm"
          />
        </div>
        <div>
          <label htmlFor="noDoc" className="text-sm">
            Nomor Dokumen
          </label>
          <input
            type="text"
            name="noDoc"
            id="noDoc"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div>
          <label htmlFor="tanggalDoc" className="text-sm">
            Tanggal Dokumen
          </label>
          <input
            type="date"
            name="tanggalDoc"
            id="tanggalDoc"
            className="input input-bordered w-full input-sm"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="text-sm">
            Tanggal Rilis
          </label>
          <input
            type="date"
            name="releaseDate"
            id="releaseDate"
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

export default AlokasiAnggaranPage;
