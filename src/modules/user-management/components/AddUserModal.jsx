import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useMutateRegisterUser from '../hooks/useMutateRegisterUser';
import useQueryRole from '../hooks/useQueryRole';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const registerSchema = z.object({
  user_type: z
    .string({
      invalid_type_error: 'Role harus diisi',
      required_error: 'Role harus diisi',
    })
    .min(1, 'Role harus diisi')
    .refine((val) => val !== 'xx', 'Role harus diisi'),
  user_nama: z.string({ required_error: 'Nama Harus Diisi' }).min(1, 'Nama Harus Diisi').max(255),
  username: z
    .string({
      invalid_type_error: 'Email tidak valid',
      required_error: 'Email harus diisi',
    })
    .email({
      message: 'Email tidak valid',
    }),
  user_phone: z
    .string({ required_error: 'Nomor Telepon / WA harus diisi' })
    .regex(phoneRegex, 'Nomor telepon / WA tidak valid'),
});

const AddUserModal = () => {
  const ref = useRef(null);
  const { data: userRoles } = useQueryRole();

  const roles = userRoles?.data || [];

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      user_type: undefined,
    },
  });

  const { mutateAsync, isPending } = useMutateRegisterUser();

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  const onSubmit = (formData) => {
    mutateAsync(formData).then(() => {
      closeModal();
      form.reset();
    });
  };

  return (
    <>
      <button
        onClick={showModal}
        role="button"
        className="btn btn-accent btn-sm btn-ghost text-primary normal-case"
      >
        <PlusCircle /> Tambah User
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <UserPlus className="h-4 w-4 mr-2" />
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Add User</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>

          <div>
            <label htmlFor="user_nama" className="label">
              Name
            </label>
            <input
              id="user_nama"
              name="user_nama"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              {...form.register('user_nama')}
            />
            <p className="text-xs text-error mt-2">{form.formState.errors?.user_nama?.message}</p>
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
            <p className="text-xs text-error mt-2">{form.formState.errors?.username?.message}</p>
          </div>
          <div>
            <label htmlFor="user_phone" className="label">
              No Telepon
            </label>
            <input
              id="user_phone"
              name="user_phone"
              type="tel"
              placeholder="Type here"
              className="input w-full input-bordered"
              {...form.register('user_phone')}
            />
            <p className="text-xs text-error mt-2">{form.formState.errors?.user_phone?.message}</p>
          </div>

          <div>
            <label htmlFor="user_role" className="label">
              Role
            </label>
            <select
              id="user_role"
              className="select select-bordered w-full"
              {...form.register('user_type')}
            >
              <option value="xx">Any Role</option>
              {roles.map((role) => (
                <option value={role.user_type_id} key={role.user_type_id}>
                  {role.user_type_name}
                </option>
              ))}
            </select>
            <p className="text-xs text-error mt-2">{form.formState.errors?.user_type?.message}</p>
          </div>

          <button
            disabled={isPending}
            className="btn btn-accent text-white btn-md w-full mt-6"
            onClick={form.handleSubmit(onSubmit)}
          >
            {isPending && <span className="loading loading-infinity"></span>}
            Add
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddUserModal;
