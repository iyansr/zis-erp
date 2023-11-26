import { BookOpen, Building, FileText, Landmark, Wallet, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

import DashboardItem from '@/modules/dashboard/components/DashboardItem';

const data = [
  {
    title: 'Company Code Master Data',
    description: 'Pengaturan Master Kode Perusahaan',
    Icon: Building,
    href: '#!',
  },
  {
    title: 'Vendor Master Data',
    description: 'Pengaturan Master Data Vendor',
    Icon: Warehouse,
    href: '/dashboard/master-data/vendor-master-data',
  },
  {
    title: 'GL Account Master Data',
    description: '',
    Icon: BookOpen,
    href: '/dashboard/master-data/gl-account',
  },
  {
    title: 'Document Type Master Data',
    description: 'Pengaturan Master Data Dokumen',
    Icon: FileText,
    href: '/dashboard/master-data/document-type',
  },
  {
    title: 'Bank',
    description: 'Pengaturan Master Data untuk Bank',
    Icon: Landmark,
    href: '/dashboard/master-data/bank-master-data',
  },
  {
    title: 'Akun Bank',
    description: 'Pengaturan Master Data untuk Akun Rekening Bank',
    Icon: Wallet,
    href: '#!',
  },
];

const MasterDataPage = () => {
  return (
    <div>
      <img
        src="/ERP/dashboard_header.png"
        alt="Dashboard Header"
        className="w-full h-72 object-cover"
      />

      <div className="px-12 py-6 border-b border-b-zinc-500 ">
        <h2 className="font-semibold text-2xl">Selamat Datang</h2>
        <p className="mt-4">Hai User, Selamat datang di Dashboard ERP Ziswaf Indosat</p>
      </div>

      <div className="px-12 py-6">
        <h2 className="font-semibold text-2xl">Nikmati kemudahan pengaturan data disini</h2>
        <div className="flex items-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-white shadow-md rounded-md border border-zinc-200 text-lg">
            <span className="text-primary font-medium">Buat Faktur</span> Vendor
          </button>
          <button className="px-4 py-2 bg-white shadow-md rounded-md border border-zinc-200 text-lg">
            <span className="text-primary font-medium">Unggah Data</span> Koleksi MT940
          </button>
        </div>

        <div className="flex flex-wrap mt-5 gap-4 max-w-screen-xl">
          {data.map((item, index) => (
            <Link to={item.href} key={String(index)}>
              <DashboardItem item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterDataPage;
