import React from 'react';

const severityColor = (level) => {
  switch (level) {
    case 'Berat':
      return 'text-red-600 bg-red-50 border-red-200';
    case 'Sedang':
      return 'text-amber-600 bg-amber-50 border-amber-200';
    default:
      return 'text-emerald-600 bg-emerald-50 border-emerald-200';
  }
};

export default function ViolationsTable({ data }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <p className="font-medium text-slate-800">List Pelanggaran</p>
        <div className="text-xs text-slate-500">Total: {data.length}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Tanggal</th>
              <th className="text-left px-4 py-3 font-medium">Nama Siswa</th>
              <th className="text-left px-4 py-3 font-medium">Kelas</th>
              <th className="text-left px-4 py-3 font-medium">Pelanggaran</th>
              <th className="text-left px-4 py-3 font-medium">Tingkat</th>
              <th className="text-left px-4 py-3 font-medium">Poin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-700">{row.tanggal}</td>
                <td className="px-4 py-3 text-slate-700">{row.nama}</td>
                <td className="px-4 py-3 text-slate-700">{row.kelas}</td>
                <td className="px-4 py-3 text-slate-700">{row.pelanggaran}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${severityColor(row.tingkat)}`}>
                    {row.tingkat}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-slate-800">{row.poin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
