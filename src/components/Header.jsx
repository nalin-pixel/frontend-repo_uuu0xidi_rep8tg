import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="">
        <h1 className="text-xl font-semibold text-slate-800">Dashboard Pelanggaran Siswa</h1>
        <p className="text-sm text-slate-500">Ringkasan data terbaru dan aktivitas</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari..."
            className="pl-10 pr-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        <button className="relative inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-slate-100">
          <Bell size={18} className="text-slate-600" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">3</span>
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500" />
      </div>
    </header>
  );
}
