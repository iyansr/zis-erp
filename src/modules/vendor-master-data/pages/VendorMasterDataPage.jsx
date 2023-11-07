import { ExternalLink, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import DataOrganisasiCheckBox from '../components/DataOrganisasiCheckBox';
import DataUmumCheckBox from '../components/DataUmumCheckBox';
import KodePerusahaanCheckBox from '../components/KodePerusahaanCheckBox';

const VendorMasterDataPage = () => {
  return (
    <>
      <div className="p-10">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li className="text-accent">
              <Link to="/dashboard">Buat dan Kelola Master Data</Link>
            </li>
            <li>
              <Link to="/dashboard/master-data">Master Data</Link>
            </li>
            <li>Vendor Master Data</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Selamat Datang</h2>
            <button className="btn btn-accent btn-md text-white normal-case">
              <PlusIcon /> Buat Vendor Baru
            </button>
          </div>

          <h4 className="text-xl text-zinc-500">Mulai masukkan Data untuk menampilkan vendor</h4>
        </div>

        <hr className="my-5 border-2" />

        <div className="form-control flex flex-col space-y-4">
          <fieldset className="flex flex-col">
            <label htmlFor="nama_vendor" className="label text-base font-medium">
              Nama Vendor
            </label>
            <input
              type="text"
              id="nama_vendor"
              name="nama_vendor"
              placeholder="Masukkan Nama Vendor"
              className="input input-primary input-bordered"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="kode_company" className="label text-base font-medium">
              Kode Perusahaan Vendor
            </label>
            <input
              type="text"
              id="kode_company"
              name="kode_company"
              placeholder="Masukkan Kode Perusahaan Vendor"
              className="input input-primary input-bordered"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="kode_company" className="label text-base font-medium">
                Kode Perusahaan Vendor
              </label>
              <button className="btn btn-primary  btn-outline text-white normal-case hover:!text-white">
                <ExternalLink /> Lihat Kode Account Group
              </button>
            </div>
            <input
              type="text"
              id="kode_company"
              name="kode_company"
              placeholder="Masukkan Kode Perusahaan Vendor"
              className="input input-primary input-bordered"
            />
          </fieldset>

          <div className="flex">
            <button className="btn btn-accent btn-md text-white normal-case">Tampilkan Data</button>
          </div>
        </div>
      </div>
      <DataUmumCheckBox />
      <KodePerusahaanCheckBox />
      <DataOrganisasiCheckBox />
    </>
  );
};

export default VendorMasterDataPage;
