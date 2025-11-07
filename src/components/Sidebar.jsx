import React from 'react';
import { Home, List, Users, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-4 py-2 rounded-md text-sm font-medium transition-colors
      ${active ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="h-full w-64 border-r border-slate-200 bg-white">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">SP</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Sistem Pelanggaran</p>
            <p className="text-xs text-slate-500">Dashboard Sekolah</p>
          </div>
        </div>

        <nav className="space-y-2">
          <NavItem icon={Home} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={List} label="Pelanggaran" active={activeTab === 'pelanggaran'} onClick={() => setActiveTab('pelanggaran')} />
          <NavItem icon={Users} label="Kelas & Siswa" active={activeTab === 'kelas'} onClick={() => setActiveTab('kelas')} />
          <NavItem icon={Settings} label="Pengaturan" active={activeTab === 'pengaturan'} onClick={() => setActiveTab('pengaturan')} />
        </nav>

        <div className="mt-8 p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-sky-50 border border-slate-200">
          <p className="text-xs text-slate-600">
            Pantau pelanggaran siswa dan ambil tindakan lebih cepat dengan data yang rapi dan akurat.
          </p>
        </div>
      </div>
    </aside>
  );
}
