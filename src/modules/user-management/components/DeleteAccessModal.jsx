import { TrashIcon, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

const DeleteAccessModal = ({ data }) => {
  const ref = useRef(null);

  const form = useForm({
    defaultValues: {
      username: data.username,
      user_nama: data.user_nama,
      type: data.user_type,
    },
  });

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-sm btn-ghost text-sm normal-case text-neutral">
        <TrashIcon className="h-3 w-3" />
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <UserPlus className="h-4 w-4 mr-2" />
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Remove User Access</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>

          <div>
            <label htmlFor="user_nama" className="label">
              Name
            </label>
            <input
              disabled
              id="user_nama"
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
              disabled
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
                <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                  <input
                    {...form.register('type')}
                    name="type"
                    type="radio"
                    checked
                    value="7"
                    className="radio radio-sm radio-accent checked:bg-accent"
                  />
                  <span>Admin</span>
                </label>
              </div>
              <div className="form-control flex-1">
                <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                  <input
                    {...form.register('type')}
                    name="type"
                    type="radio"
                    value="8"
                    className="radio radio-sm radio-accent checked:bg-accent"
                  />
                  <span>Finance</span>
                </label>
              </div>
              <div className="form-control flex-1">
                <label className="label cursor-pointer space-x-2 justify-start bg-slate-100 w-full px-4 py-2 rounded-md">
                  <input
                    {...form.register('type')}
                    name="type"
                    type="radio"
                    value="12"
                    className="radio radio-sm radio-accent checked:bg-accent"
                  />
                  <span>Officer</span>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-4 w-full mt-6">
              <button className="btn btn-accent btn-outline text-white flex-1">Cancel</button>
              <button className="btn btn-accent text-white flex-1">Done</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteAccessModal;
