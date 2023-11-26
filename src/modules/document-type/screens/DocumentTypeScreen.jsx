import { Link } from 'react-router-dom';

import TableInstance from '@/modules/shared/components/TableInstance';

import AddDocumentTypeModal from '../components/AddDocumentTypeModal';
import useDocumentTypeTable from '../hooks/useDocumentTypeTable';

const DocumentTypeScreen = () => {
  const { table, isLoading } = useDocumentTypeTable();

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
          <li>Document Type</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">Selamat Datang</h2>

          <AddDocumentTypeModal />
        </div>

        <h4 className="text-xl text-zinc-500">
          Mulai masukkan Data untuk menampilkan dokumen type
        </h4>
      </div>

      {/* <GLAccountToolbar table={table} /> */}

      <div className="overflow-x-auto">
        <TableInstance table={table} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default DocumentTypeScreen;
