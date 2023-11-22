import { useRef } from 'react';

const DetailMustahiqModal = ({ user }) => {
  const ref = useRef(null);

  const showModal = () => {
    ref.current?.showModal();
  };

  const closeModal = () => {
    ref.current?.close();
  };

  return (
    <>
      <button
        onClick={showModal}
        className="btn btn-accent btn-outline hover:!text-white text-white btn-md w-full mt-6"
      >
        Lihat Data Akun Mustahiq
      </button>

      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <div className="flex items-center border-b pb-2">
            <div className="flex-1">
              <h3 className="font-bold text-lg ">Detail Mustahiq</h3>
            </div>
            <button onClick={closeModal}>✕</button>
          </div>

          <div className="form-control">
            <label className="label">Nama</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
              value={user?.user_nama || '-'}
            />
          </div>

          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
              value={user?.username || '-'}
            />
          </div>

          <div className="form-control">
            <label className="label">Nomor Rekening</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={user.mustahiq?.bank_number || '-'}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">Nama Rekening</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={user.mustahiq?.bank_account_name || '-'}
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">Nama Bank</label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              value={user.mustahiq?.bank_name || '-'}
              disabled
            />
          </div>

          <button className="btn btn-accent text-white btn-md w-full mt-6" onClick={closeModal}>
            Kembali
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DetailMustahiqModal;
