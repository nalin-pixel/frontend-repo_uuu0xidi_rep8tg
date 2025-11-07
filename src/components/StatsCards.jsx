import React from 'react';
import { ListChecks, Users, GraduationCap } from 'lucide-react';

export default function StatsCards({ stats }) {
  const items = [
    {
      title: 'Total Pelanggaran',
      value: stats.totalPelanggaran,
      icon: ListChecks,
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Jumlah Kelas',
      value: stats.jumlahKelas,
      icon: GraduationCap,
      color: 'from-indigo-500 to-sky-500',
    },
    {
      title: 'Jumlah Siswa',
      value: stats.jumlahSiswa,
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(({ title, value, icon: Icon, color }) => (
        <div key={title} className="p-4 rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">{title}</p>
              <p className="text-2xl font-semibold text-slate-800 mt-1">{value}</p>
            </div>
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center`}>
              <Icon size={18} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
