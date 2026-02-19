<template>
  <div class="min-h-screen bg-white">
    <!-- Reuse Storefront Header -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-12">
        <!-- Image Gallery -->
        <div class="flex-1">
          <div class="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative">
            <div class="absolute inset-0 flex items-center justify-center text-gray-400">Ürün Ana Görseli</div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-4">
            <div v-for="i in 4" :key="i" class="aspect-square bg-gray-50 border rounded cursor-pointer"></div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="flex-1 space-y-6">
          <div>
            <h2 class="text-sm font-bold text-gray-500 uppercase tracking-widest">Marka İsmi</h2>
            <h1 class="text-2xl font-medium text-gray-900 mt-1">Desenli Şifon Şal - Vizon</h1>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-3xl font-bold text-pink-600">289.90 TL</span>
            <span class="text-lg text-gray-400 line-through">420.00 TL</span>
            <span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">-%31</span>
          </div>

          <!-- Variants -->
          <div class="space-y-4 border-t border-b py-6">
            <div>
              <label class="text-sm font-bold text-gray-700">RENK: <span class="font-normal">Vizon</span></label>
              <div class="flex gap-2 mt-2">
                <div class="w-8 h-8 rounded-full border-2 border-pink-600 bg-[#C5B4A2]"></div>
                <div class="w-8 h-8 rounded-full border border-gray-200 bg-black"></div>
                <div class="w-8 h-8 rounded-full border border-gray-200 bg-navy"></div>
              </div>
            </div>

            <div>
              <label class="text-sm font-bold text-gray-700">BEDEN: <span class="font-normal text-pink-600">Standart</span></label>
              <div class="flex gap-2 mt-2">
                <button class="px-4 py-2 border-2 border-pink-600 text-pink-600 font-bold rounded">STD</button>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-4">
            <button class="flex-1 bg-pink-600 text-white font-bold py-4 rounded hover:bg-pink-700 transition shadow-lg shadow-pink-200">
              SEPETE EKLE
            </button>
            <button class="p-4 border rounded hover:bg-gray-50">
              <span class="text-xl">🤍</span>
            </button>
          </div>

          <!-- Info -->
          <div class="text-sm text-gray-600 space-y-2 pt-4">
            <p>✓ 24 Saatte Kargoda</p>
            <p>✓ Kapıda Ödeme Seçeneği</p>
            <p>✓ 14 Gün İade Garantisi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
