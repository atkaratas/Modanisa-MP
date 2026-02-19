<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-5xl">
      <h1 class="text-3xl font-bold mb-8">Ödeme Yap</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Delivery & Payment Form -->
        <div class="md:col-span-2 space-y-6">
          <!-- Delivery Address -->
          <div class="bg-white p-6 rounded shadow-sm">
            <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
              <span class="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
              Teslimat Bilgileri
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Ad" class="border p-2 rounded" />
              <input type="text" placeholder="Soyad" class="border p-2 rounded" />
              <input type="text" placeholder="Telefon" class="border p-2 rounded col-span-2" />
              <textarea placeholder="Adres" class="border p-2 rounded col-span-2 h-24"></textarea>
            </div>
          </div>

          <!-- Credit Card -->
          <div class="bg-white p-6 rounded shadow-sm border-2 border-pink-500">
            <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
              <span class="bg-pink-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
              Ödeme Yöntemi
            </h2>
            <div class="space-y-4">
              <div class="border p-4 rounded bg-pink-50 border-pink-200">
                <label class="font-bold text-sm block mb-2">Kart Numarası</label>
                <input type="text" placeholder="**** **** **** ****" class="w-full border p-2 rounded mb-4" />
                <div class="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="AA / YY" class="border p-2 rounded" />
                  <input type="text" placeholder="CVC" class="border p-2 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="md:col-span-1">
          <div class="bg-white p-6 rounded shadow-sm sticky top-24">
            <h2 class="font-bold text-lg mb-4">Sipariş Özeti</h2>
            <div class="space-y-2 text-sm border-b pb-4">
              <div class="flex justify-between">
                <span>Ürün Toplamı</span>
                <span>289.90 TL</span>
              </div>
              <div class="flex justify-between">
                <span>Kargo Toplamı</span>
                <span class="text-green-600 font-bold">BEDAVA</span>
              </div>
            </div>
            <div class="flex justify-between py-4 text-xl font-bold text-pink-600">
              <span>Toplam</span>
              <span>289.90 TL</span>
            </div>
            <button class="w-full bg-green-600 text-white font-bold py-4 rounded hover:bg-green-700 transition">
              ÖDEMEYİ TAMAMLA
            </button>
            <p class="text-[10px] text-gray-400 mt-4 text-center">
              "Ödemeyi Tamamla" butonuna basarak Mesafeli Satış Sözleşmesi'ni kabul etmiş olursunuz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
