import {
  AreaChart,
  Banknote,
  FileBarChart,
  FileInput,
  Newspaper,
  PieChart,
  SunMedium,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import DashboardItem from '../components/DashboardItem';

const data = [
  {
    title: 'Buat dan Kelola Master Data',
    description: 'Company Code, Vendor, Tipe Dokumen, G/L Account',
    Icon: SunMedium,
    href: '/dashboard/master-data',
  },
  {
    title: 'Lacak dan Lihat Faktur',
    description: 'Invoice',
    Icon: Newspaper,
    iconText: '120',
    href: '#!',
  },
  {
    title: 'Buat dan Lihat Dana Tunai',
    description: 'Petty Cash',
    Icon: Banknote,
    href: '#!',
  },
  {
    title: 'Lihat Data Koleksi MT940',
    description: 'MT940',
    Icon: FileInput,
    href: '#!',
  },
  {
    title: 'Buatkan Laporan Koleksi MT940',
    description: 'MT940',
    Icon: FileBarChart,
    href: '#!',
  },
  {
    title: 'Lacak dan Lihat Alokasi Anggaran',
    description: 'Budgeting',
    Icon: PieChart,
    href: '/dashboard/anggaran',
  },
  {
    title: 'Hasilkan Laporan Anggaran',
    description: 'Budgeting',
    Icon: AreaChart,
    href: '#!',
  },
];

const DashboardPage = () => {
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

export default DashboardPage;
