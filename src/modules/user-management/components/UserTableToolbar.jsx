import { useForm } from 'react-hook-form';

import useQueryRole from '../hooks/useQueryRole';
import AddUserModal from './AddUserModal';

const UserTableToolbar = ({ table }) => {
  const { data } = useQueryRole();
  const roles = data?.data || [];

  const form = useForm({
    defaultValues: {
      user_nama: '',
    },
  });

  const onSearch = (data) => {
    if (data.user_nama) {
      table.getColumn('user_nama')?.setFilterValue(data.user_nama);
    }

    if (data.user_type && data.user_type !== 'all') {
      table.getColumn('user_type')?.setFilterValue(Number(data.user_type));
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSearch)} className="grid grid-cols-6 gap-4 my-6">
      <input
        type="text"
        name="search"
        id="search"
        className="input input-bordered w-full input-sm"
        placeholder="Search"
        {...form.register('user_nama')}
      />

      <select
        className="select select-bordered select-sm w-full max-w-xs"
        {...form.register('user_type')}
      >
        <option value={'all'}>Any Role</option>
        {roles.map((role) => (
          <option value={role.user_type_id} key={role.user_type_id}>
            {role.user_type_name}
          </option>
        ))}
      </select>

      <div className="flex mt-auto">
        {form.formState.isDirty && (
          <button
            type="button"
            className="btn btn-sm btn-ghost mr-2"
            onClick={() => {
              form.reset();
              table.resetColumnFilters();
            }}
          >
            Reset
          </button>
        )}
        <button className="btn btn-sm btn-primary text-white" type="submit">
          Go
        </button>
        <div className="divider divider-horizontal" />
        <AddUserModal />
      </div>
    </form>
  );
};

export default UserTableToolbar;
