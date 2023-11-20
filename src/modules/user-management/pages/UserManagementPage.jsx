import TableInstance from '@/modules/shared/components/TableInstance';

import UserTableToolbar from '../components/UserTableToolbar';
import useUserTable from '../hooks/useUserTable';

const UserManagementPage = () => {
  const { table, isLoading } = useUserTable();

  return (
    <div className="p-10">
      <div className="bg-slate-100 -mx-10 px-10 pt-10 pb-1 -mt-10">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl">User Management</h2>
          </div>
        </div>

        <UserTableToolbar table={table} />
      </div>
      <div className="flex space-x-4 mt-6">
        <div className="overflow-x-auto flex-1">
          <TableInstance table={table} isLoading={isLoading} />

          <div className="flex justify-end">
            <div className="join">
              <button
                className="join-item btn btn-ghost"
                onClick={() => (table.getCanPreviousPage() ? table.previousPage() : null)}
              >
                «
              </button>
              <button className="join-item btn btn-ghost">
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </button>
              <button
                className="join-item btn btn-ghost"
                onClick={() => (table.getCanNextPage() ? table.nextPage() : null)}
              >
                »
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4 w-60 space-y-4 border rounded-md">
            <div className="border-b pb-2">
              <p className="font-semibold">Role Description</p>
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold">Super Admin</p>
              <p className="text-xs">Has access to all menus and able to add new users.</p>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Creative Admin</p>
              <p className="text-xs">Has access to Banner Management for Website.</p>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Approver Admin</p>
              <p className="text-xs">
                Has access to Approve Programs and Propose Finance for Financial Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
