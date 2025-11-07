import React, { useState } from 'react';

export default function SettingsPanel() {
  const [threshold, setThreshold] = useState(100);
  const [notify, setNotify] = useState(true);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="font-medium text-slate-800 mb-2">Pengaturan</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">Ambang Poin Peringatan</label>
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <p className="text-xs text-slate-500 mt-1">Jika poin siswa melebihi nilai ini, tandai sebagai peringatan.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            id="notify"
            type="checkbox"
            checked={notify}
            onChange={(e) => setNotify(e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor="notify" className="text-sm text-slate-700">Kirim notifikasi ke wali kelas</label>
        </div>
      </div>
    </div>
  );
}
