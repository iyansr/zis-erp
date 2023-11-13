import { createBrowserRouter, Outlet, redirect } from 'react-router-dom';

import LoginPage from '../auth/pages/LoginPage';
import BankMasterDataPage from '../bank-master-data/pages/BankMasterDataPage';
import AlokasiAnggaranPage from '../budgeting/pages/AlokasiAnggaranPage';
import DashboardPage from '../dashboard/pages/DashboardPage';
import GLAccountPage from '../gl-account/pages/GLAccountPage';
import MasterDataPage from '../master-data/pages/MasterDataPage';
import ProgramManagementPage from '../program-management/pages/ProgramManagementPage';
import { Layout } from '../shared/components/Layout';
import { MasterDataLayout } from '../shared/components/MasterDataLayout';
import UserManagementPage from '../user-management/pages/UserManagementPage';
import VendorMasterDataPage from '../vendor-master-data/pages/VendorMasterDataPage';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Outlet />,

    children: [
      {
        index: true,
        element: <div>a</div>,
        loader: () => {
          return redirect('/login');
        },
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'dashboard',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'anggaran',
            element: <AlokasiAnggaranPage />,
          },
          {
            path: 'user-management',
            element: <UserManagementPage />,
          },
          {
            path: 'program-management',
            element: <ProgramManagementPage />,
          },
          {
            path: 'master-data',
            element: <MasterDataLayout showHeader={false} />,
            children: [
              {
                index: true,
                element: <MasterDataPage />,
              },
              {
                path: 'gl-account',
                element: (
                  <MasterDataLayout isRoot={false}>
                    <GLAccountPage />
                  </MasterDataLayout>
                ),
              },
              {
                path: 'vendor-master-data',
                element: (
                  <MasterDataLayout isRoot={false}>
                    <VendorMasterDataPage />
                  </MasterDataLayout>
                ),
              },
              {
                path: 'bank-master-data',
                element: (
                  <MasterDataLayout isRoot={false}>
                    <BankMasterDataPage />
                  </MasterDataLayout>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
