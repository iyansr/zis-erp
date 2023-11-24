import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useMutateAddGLAccount from '../hooks/useMutateAddGLAccount';

export const registerSchema = z.object({
  gl_account: z.string().min(1),
  gl_name: z.string().optional(),
  gl_type: z.string().min(1),
  gl_group: z.string().min(1),
  description: z.string().optional(),
  status: z.string().min(1),
  coa: z.string().min(1),
});

const generateFormFields = (schema) => {
  const customLabels = {
    gl_account: 'GL Account Number',
    gl_name: 'GL Name',
    gl_type: 'GL Type',
    gl_group: 'GL Group',
    description: 'Description',
    status: 'Status',
    coa: 'COA',
  };

  const selectFields = ['status'];

  return Object.keys(schema.shape).map((key) => ({
    name: key,
    label: customLabels[key] || key.replace(/_/g, ' '), // Convert snake_case to Title Case for labels
    type: selectFields.includes(key) ? 'select' : 'text', // You may want to customize this based on your needs
    options: key === 'status' ? ['active', 'blocked', 'inactive'] : null,
  }));
};

const AddGLModal = () => {
  const ref = useRef(null);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      user_type: undefined,
    },
  });

  const { mutateAsync, isPending } = useMutateAddGLAccount();

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

  // Generate form fields based on the schema
  const formFields = generateFormFields(registerSchema);

  return (
    <>
      <button onClick={showModal} className="btn btn-accent btn-md text-white normal-case">
        <PlusIcon /> Buat GL Account Baru
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <UserPlus className="h-4 w-4 mr-2" />
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Add GL Account</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>

          {formFields.map((field) => (
            <div key={field.name}>
              <label htmlFor="user_nama" className="label">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  placeholder="Type here"
                  className="input select w-full input-bordered"
                  id={field.name}
                  {...form.register(field.name)}
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  placeholder="Type here"
                  className="input w-full input-bordered"
                  type={field.type}
                  id={field.name}
                  {...form.register(field.name)}
                />
              )}
              <p className="text-xs text-error mt-2">
                {form.formState.errors?.[field.name]?.message}
              </p>
            </div>
          ))}

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

export default AddGLModal;
