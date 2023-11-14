import TableInstance from '@/modules/shared/components/TableInstance';

import useUserTable from '../hooks/useUserTable';

const UserManagementPage = () => {
  const table = useUserTable();
  return (
    <div className="p-10">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">User Management</h2>
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
            placeholder="Search"
          />
        </div>

        <div className="flex mt-auto mb-1">
          <button className="btn btn-xs btn-primary text-white">Go</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <TableInstance table={table} />
      </div>
      {/* <div className="flex justify-end">
        <div className="join">
          <button className="join-item btn btn-ghost">«</button>
          <button className="join-item btn btn-ghost">1 of 20</button>
          <button className="join-item btn btn-ghost">»</button>
        </div>
      </div> */}
    </div>
  );
};

export default UserManagementPage;
