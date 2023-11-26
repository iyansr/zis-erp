import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon, UserPlus } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import decodeJWT from '@/modules/shared/libs/decode';

import useMutateAddDocumentType from '../hooks/useMutateAddDocumentType';

export const registerSchema = z.object({
  posting_key: z.string().min(1),
  indicator: z.string().min(1),
  account_type: z.string().min(1),
  description1: z.string().optional(),
  description2: z.string().optional(),
  description3: z.string().optional(),
});

const generateFormFields = (schema) => {
  const customLabels = {
    posting_key: 'Posting Key',
    indicator: 'D/C Indicator',
    account_type: 'Tipe Akun',
    description1: 'Deskripsi 1',
    description2: 'Deskripsi 2',
    description3: 'Deskripsi 3',
  };

  return Object.keys(schema.shape).map((key) => ({
    name: key,
    label: customLabels[key] || key.replace(/_/g, ' '), // Convert snake_case to Title Case for labels
    type: 'text', // You may want to customize this based on your needs
  }));
};

const AddDocumentTypeModal = () => {
  const ref = useRef(null);

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync, isPending } = useMutateAddDocumentType();

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  const onSubmit = (formData) => {
    const decoded = decodeJWT(localStorage.getItem('token'));
    const user_id = decoded?.user_id;

    console.log(decoded);

    if (!user_id) {
      return;
    }

    mutateAsync({
      ...formData,
      user_id,
    }).then(() => {
      closeModal();
      form.reset();
    });
  };

  // Generate form fields based on the schema
  const formFields = generateFormFields(registerSchema);

  return (
    <>
      <button onClick={showModal} className="btn btn-accent btn-md text-white normal-case">
        <PlusIcon /> Buat Tipe Dokumen Baru
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <UserPlus className="h-4 w-4 mr-2" />
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Add Tipe Dokumen</h3>
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

export default AddDocumentTypeModal;
