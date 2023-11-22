import { format } from 'date-fns';
import { useRef } from 'react';

const DetailProgramModal = ({ data }) => {
  const ref = useRef(null);

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  const label = {
    0: 'Ditolak',
    1: 'Menunggu Persetujuan',
    2: 'Active',
  };

  return (
    <>
      <button
        onClick={showModal}
        className="btn !normal-case btn-accent btn-outline btn-sm rounded-none hover:!text-white"
      >
        Lihat Data
      </button>

      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Detail Proposal</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>
          <div className="form-control">
            <label className="label">Mustahiq ID</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
              value={data.user?.mustahiq_id || '-'}
            />
          </div>
          <div className="form-control">
            <label className="label">Nama</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
              value={data.user?.user_nama || '-'}
            />
          </div>
          <div className="form-control">
            <label className="label">Tujuan Proposal</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={data.program_category?.name || '-'}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">Tanggal Submit</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={format(new Date(data.program_create), 'dd/MM/yyyy') || '-'}
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">Nomor Rekening</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={data.user.mustahiq?.bank_number || '-'}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">Status</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={label[data.program_status] || '-'}
              disabled
            />
          </div>

          <button className="btn btn-accent text-white btn-md w-full mt-6">Setujui</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DetailProgramModal;
