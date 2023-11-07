const KodePerusahaanCheckBox = () => {
  return (
    <div>
      <div className="bg-slate-100 px-10 py-3 border-b border-b-slate-200">
        <p>Data Kode Perusahaan</p>
      </div>

      <div className="form-control px-10 mt-4 space-y-2">
        <div className="flex">
          <label className="label cursor-pointer flex space-x-4">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text text-base">Alamat</span>
          </label>
        </div>
        <div className="flex">
          <label className="label cursor-pointer flex space-x-4">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text text-base">Kontrol</span>
          </label>
        </div>
        <div className="flex">
          <label className="label cursor-pointer flex space-x-4">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text text-base">Transaksi Pembayaran</span>
          </label>
        </div>
        <div className="flex">
          <label className="label cursor-pointer flex space-x-4">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="label-text text-base">Kontak Person</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default KodePerusahaanCheckBox;
