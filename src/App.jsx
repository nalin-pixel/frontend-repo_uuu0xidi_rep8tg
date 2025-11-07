import React, { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import StatsCards from './components/StatsCards.jsx';
import ViolationsTable from './components/ViolationsTable.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dummy data (can be wired to backend later)
  const pelanggaran = useMemo(
    () => [
      { tanggal: '2025-03-12', nama: 'Aldi Pratama', kelas: 'X IPA 1', pelanggaran: 'Tidak memakai seragam lengkap', tingkat: 'Ringan', poin: 5 },
      { tanggal: '2025-03-14', nama: 'Sinta Lestari', kelas: 'XI IPS 2', pelanggaran: 'Datang terlambat', tingkat: 'Ringan', poin: 3 },
      { tanggal: '2025-03-15', nama: 'Bima Nur', kelas: 'XII RPL', pelanggaran: 'Membawa HP saat pelajaran', tingkat: 'Sedang', poin: 15 },
      { tanggal: '2025-03-16', nama: 'Nadia Putri', kelas: 'XI IPA 3', pelanggaran: 'Tidak mengikuti upacara', tingkat: 'Sedang', poin: 10 },
      { tanggal: '2025-03-18', nama: 'Raka Syah', kelas: 'X TKJ 1', pelanggaran: 'Bolos pelajaran', tingkat: 'Berat', poin: 25 },
    ],
    []
  );

  const stats = {
    totalPelanggaran: pelanggaran.length,
    jumlahKelas: 18,
    jumlahSiswa: 540,
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">Ringkasan</h1>
              <p className="text-sm text-slate-500">Ikhtisar singkat kondisi terkini</p>
            </div>
            <StatsCards stats={stats} />
            <ViolationsTable data={pelanggaran} />
          </div>
        );
      case 'pelanggaran':
        return (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">List Pelanggaran</h1>
              <p className="text-sm text-slate-500">Data pelanggaran terbaru</p>
            </div>
            <ViolationsTable data={pelanggaran} />
          </div>
        );
      case 'kelas':
        return (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">Kelas & Siswa</h1>
              <p className="text-sm text-slate-500">Statistik jumlah kelas dan siswa</p>
            </div>
            <StatsCards stats={stats} />
          </div>
        );
      case 'pengaturan':
        return (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">Pengaturan</h1>
              <p className="text-sm text-slate-500">Atur preferensi dashboard</p>
            </div>
            <SettingsPanel />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex h-screen overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 h-full overflow-y-auto">
          <div className="px-6 py-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
