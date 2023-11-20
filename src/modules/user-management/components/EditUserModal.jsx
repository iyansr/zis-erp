import { EditIcon, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import useMutateUpdateUser from '../hooks/useMutateUpdateUser';

const EditUserModal = ({ data }) => {
  const ref = useRef(null);

  const { mutateAsync, isPending } = useMutateUpdateUser();

  const form = useForm({
    defaultValues: {
      username: data.username,
      user_nama: data.user_nama,
      user_type: Number(data.user_type),
    },
  });

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  const onSubmit = (formData) => {
    mutateAsync({
      id: data.user_id,
      ...(formData.user_type && { user_type: Number(formData.user_type) }),
      ...formData,
    }).then(() => {
      closeModal();
    });
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-sm btn-ghost text-sm normal-case text-neutral">
        <EditIcon className="h-3 w-3" />
      </button>
      <dialog ref={ref} id={`edit-user-modal-${data.user_id}`} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <UserPlus className="h-4 w-4 mr-2" />
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Edit User Access</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>

          <div>
            <label htmlFor={`user_nama-${data.user_id}`} className="label">
              Name
            </label>
            <input
              id={`user_nama-${data.user_id}`}
              name="user_nama"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              {...form.register('user_nama')}
            />
          </div>

          <div>
            <label htmlFor="username" className="label">
              Email
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              {...form.register('username')}
            />
          </div>

          <div className="mt-4">
            <p className="font-semibold">Role:</p>

            <div className="flex items-center justify-between space-x-4 mt-2">
              <div className="form-control flex-1">
                <Controller
                  control={form.control}
                  name="user_type"
                  render={({ field }) => {
                    return (
                      <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                        <input
                          type="radio"
                          checked={Number(field.value) === 7}
                          onChange={field.onChange}
                          value={7}
                          className="radio radio-sm radio-accent checked:bg-accent"
                        />
                        <span>Admin</span>
                      </label>
                    );
                  }}
                />
              </div>
              <div className="form-control flex-1">
                <Controller
                  control={form.control}
                  name="user_type"
                  render={({ field }) => {
                    return (
                      <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                        <input
                          type="radio"
                          checked={Number(field.value) === 8}
                          onChange={field.onChange}
                          value={8}
                          className="radio radio-sm radio-accent checked:bg-accent"
                        />
                        <span>Finance</span>
                      </label>
                    );
                  }}
                />
              </div>
              <div className="form-control flex-1">
                <Controller
                  control={form.control}
                  name="user_type"
                  render={({ field }) => {
                    return (
                      <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                        <input
                          type="radio"
                          checked={Number(field.value) === 12}
                          onChange={field.onChange}
                          value={12}
                          className="radio radio-sm radio-accent checked:bg-accent"
                        />
                        <span>Officer</span>
                      </label>
                    );
                  }}
                />
              </div>
            </div>

            <button
              className="btn btn-accent text-white btn-md w-full mt-6"
              disabled={isPending}
              onClick={form.handleSubmit(onSubmit)}
            >
              {isPending && <span className="loading loading-infinity"></span>}
              Done
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditUserModal;
