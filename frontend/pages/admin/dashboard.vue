<template>
  <div class="min-h-screen bg-[#0f172a] text-white flex">
    <!-- Admin Sidebar -->
    <aside class="w-64 bg-[#1e293b] border-r border-slate-700 p-6 flex flex-col">
      <h1 class="text-xl font-black text-pink-500 mb-10 tracking-tighter">MP-ADMIN v1</h1>
      <nav class="space-y-4 flex-1">
        <div class="text-xs font-bold text-slate-500 uppercase tracking-widest">Genel Bakış</div>
        <a href="#" class="flex items-center gap-3 p-2 bg-pink-500/10 text-pink-500 rounded"><span>📊</span> Dashboard</a>
        <a href="#" class="flex items-center gap-3 p-2 hover:bg-slate-700 rounded transition"><span>👥</span> Satıcılar</a>
        <a href="#" class="flex items-center gap-3 p-2 hover:bg-slate-700 rounded transition"><span>📦</span> Ürün Onay</a>
        <a href="#" class="flex items-center gap-3 p-2 hover:bg-slate-700 rounded transition"><span>💳</span> Ödemeler</a>
      </nav>
      <div class="mt-auto p-4 bg-slate-800 rounded text-xs text-slate-400">
        Sistem Durumu: <span class="text-green-500">Aktif</span>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 overflow-y-auto">
      <div class="flex justify-between items-end mb-10">
        <div>
          <h2 class="text-3xl font-bold">Yönetim Paneli</h2>
          <p class="text-slate-400 mt-1">Marketplace genel performansı ve operasyon takibi.</p>
        </div>
        <div class="text-sm bg-slate-800 px-4 py-2 rounded border border-slate-700">
          19 Şubat 2026, Perşembe
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div v-for="stat in stats" :key="stat.label" class="bg-[#1e293b] p-6 rounded-xl border border-slate-700">
          <div class="text-slate-400 text-sm mb-2">{{ stat.label }}</div>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <div :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'" class="text-xs mt-2 font-bold">
            {{ stat.trend > 0 ? '↑' : '↓' }} %{{ Math.abs(stat.trend) }} (Geçen aya göre)
          </div>
        </div>
      </div>

      <!-- Pending Product Approval Table -->
      <div class="bg-[#1e293b] rounded-xl border border-slate-700 overflow-hidden">
        <div class="p-6 border-b border-slate-700 flex justify-between items-center">
          <h3 class="font-bold">Bekleyen Ürün Onayları</h3>
          <button class="text-sm text-pink-500 hover:underline">Tümünü Gör</button>
        </div>
        <table class="w-full text-left text-sm">
          <thead class="bg-slate-800 text-slate-400">
            <tr>
              <th class="p-4">Satıcı</th>
              <th class="p-4">Ürün</th>
              <th class="p-4">Fiyat</th>
              <th class="p-4">İşlem</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-700">
            <tr v-for="i in 3" :key="i" class="hover:bg-slate-800/50 transition">
              <td class="p-4 font-medium">Lüks İpek Butik</td>
              <td class="p-4">Jakarlı Şal - Sınırlı Üretim</td>
              <td class="p-4">890.00 TL</td>
              <td class="p-4 flex gap-2">
                <button class="bg-green-600 px-3 py-1 rounded text-xs font-bold hover:bg-green-700">ONAYLA</button>
                <button class="bg-red-600/20 text-red-500 px-3 py-1 rounded text-xs font-bold hover:bg-red-600 hover:text-white">REDDET</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Toplam Ciro', value: '1.240.500 TL', trend: 12.5 },
  { label: 'Aktif Satıcılar', value: '452', trend: 4.2 },
  { label: 'Günlük Sipariş', value: '1,850', trend: -2.1 },
  { label: 'Net Komisyon', value: '186.075 TL', trend: 8.9 }
];
</script>
