<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="font-bold text-pink-600">MODANISA-MP | Vendor Central</h1>
        <div class="text-sm text-gray-600">Hoş geldin, <span class="font-bold">Tekstil Dünyası Ltd.</span></div>
      </div>
    </header>

    <div class="flex container mx-auto mt-6 gap-6">
      <!-- Sidebar -->
      <aside class="w-64 bg-white shadow-sm rounded p-4 h-fit">
        <nav class="space-y-2">
          <a href="#" class="block p-2 bg-pink-50 text-pink-600 rounded font-medium">Dashboard</a>
          <a href="#" class="block p-2 hover:bg-gray-50 rounded">Ürünlerim</a>
          <a href="#" class="block p-2 hover:bg-gray-50 rounded">Siparişler</a>
          <a href="#" class="block p-2 hover:bg-gray-50 rounded">Ayarlar</a>
        </nav>
      </aside>

      <!-- Main Panel -->
      <main class="flex-1 space-y-6">
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <div class="text-gray-500 text-sm">Aktif Ürünler</div>
            <div class="text-2xl font-bold">124</div>
          </div>
          <div class="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
            <div class="text-gray-500 text-sm">Bekleyen Siparişler</div>
            <div class="text-2xl font-bold">8</div>
          </div>
          <div class="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
            <div class="text-gray-500 text-sm">Aylık Ciro</div>
            <div class="text-2xl font-bold">45.250 TL</div>
          </div>
        </div>

        <!-- Quick Product Add -->
        <div class="bg-white p-6 rounded shadow-sm">
          <h2 class="text-lg font-bold mb-4">Hızlı Ürün Ekle</h2>
          <form class="grid grid-cols-2 gap-4">
            <div class="space-y-1">
              <label class="text-sm text-gray-600">Ürün Adı</label>
              <input type="text" class="w-full border rounded p-2" placeholder="Örn: Pamuklu Şal" />
            </div>
            <div class="space-y-1">
              <label class="text-sm text-gray-600">SKU</label>
              <input type="text" class="w-full border rounded p-2" placeholder="Örn: VDR-123" />
            </div>
            <div class="space-y-1">
              <label class="text-sm text-gray-600">Fiyat (TL)</label>
              <input type="number" class="w-full border rounded p-2" />
            </div>
            <div class="space-y-1">
              <label class="text-sm text-gray-600">Stok</label>
              <input type="number" class="w-full border rounded p-2" />
            </div>
            <button class="col-span-2 bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition">
              Ürünü Yayınla
            </button>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>
