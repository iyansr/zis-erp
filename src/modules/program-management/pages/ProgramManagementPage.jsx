import { useForm } from 'react-hook-form';

import TableInstance from '@/modules/shared/components/TableInstance';

import useProgramTable from '../hooks/useProgramTable';

const ProgramManagementPage = () => {
  const { table, isLoading } = useProgramTable();

  const form = useForm({
    defaultValues: {
      program_title: '',
    },
  });

  const onSearch = (data) => {
    if (data.program_title) {
      table.getColumn('program_title')?.setFilterValue(data.program_title);
    }
  };

  return (
    <div className="p-10">
      <div className="bg-slate-100 -mx-10 px-10 pt-10 pb-1 mb-5 -mt-10">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl">Program Management</h2>
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
              {...form.register('program_title')}
            />
          </div>

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
            <button
              onClick={form.handleSubmit(onSearch)}
              className="btn btn-sm btn-primary text-white"
              type="submit"
            >
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <TableInstance table={table} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ProgramManagementPage;
