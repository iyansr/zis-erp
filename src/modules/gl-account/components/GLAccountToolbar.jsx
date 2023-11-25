import { useForm } from 'react-hook-form';

const GLAccountToolbar = ({ table }) => {
  const form = useForm({
    defaultValues: {
      gl_name: '',
      gl_account: '',
    },
  });

  const onSearch = (data) => {
    if (data.gl_name) {
      table.getColumn('gl_name')?.setFilterValue(data.gl_name);
    }

    if (data.gl_account) {
      table.getColumn('gl_account')?.setFilterValue(Number(data.gl_account));
    }
  };

  return (
    <div className="grid grid-cols-6 gap-4 my-6">
      <div>
        <label className="text-sm">G/L Akun</label>
        <input
          type="text"
          className="input input-bordered w-full input-sm"
          {...form.register('gl_account')}
        />
      </div>
      <div>
        <label className="text-sm">Nama Akun</label>
        <input
          name="type"
          className="input input-bordered w-full input-sm"
          {...form.register('gl_name')}
        />
      </div>

      <div className="flex mt-auto ">
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
        <button className="btn btn-sm btn-primary text-white" onClick={form.handleSubmit(onSearch)}>
          Go
        </button>
      </div>
    </div>
  );
};

export default GLAccountToolbar;
