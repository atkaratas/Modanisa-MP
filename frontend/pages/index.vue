<template>
  <div class="modanisa-enterprise min-h-screen bg-[#f7f7f7] font-inter">
    <!-- Black Bar: Döküman 5b13658e (Yasal Bildirim) -->
    <div class="bg-black text-white text-[10px] py-1.5 text-center font-bold uppercase tracking-widest">
      KÜRESEL TESLİMAT | 900 TL ÜZERİ BEDAVA KARGO | 30 GÜN FİYAT GARANTİSİ
    </div>

    <!-- Header: Döküman doc_1.docx (Checkout v1 UI) -->
    <header class="bg-white border-b sticky top-0 z-[100] h-[80px] flex items-center">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <h1 class="text-3xl font-black italic text-[#f12f91] tracking-tighter cursor-pointer">MODANISA <span class="text-[10px] not-italic text-gray-400 align-top">GLOBAL-MP</span></h1>
        
        <div class="hidden md:flex flex-1 max-w-xl mx-12">
          <input type="text" placeholder="Ürün, kategori veya marka ara..." class="w-full bg-[#f2f2f2] border-none rounded-full px-6 py-2.5 text-sm focus:ring-1 focus:ring-[#f12f91] outline-none" />
        </div>

        <div class="flex gap-8 items-center">
          <div class="text-center cursor-pointer group">
            <span class="text-xl">🌍</span>
            <p class="text-[10px] font-bold group-hover:text-[#f12f91]">TR - TRY</p>
          </div>
          <div class="relative cursor-pointer group" @click="isCartOpen = !isCartOpen">
            <span class="text-2xl">🛒</span>
            <div v-if="cartItems.length > 0" class="absolute -top-1 -right-1 bg-[#f12f91] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-bounce">
              {{ cartItems.length }}
            </div>
            <p class="text-[10px] font-bold group-hover:text-[#f12f91]">Sepetim</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Grid: Döküman 39cae1f3 (Shop the Look) -->
    <main class="container mx-auto px-4 py-10">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-1.5 h-6 bg-[#f12f91]"></div>
        <h2 class="text-xl font-black uppercase tracking-tight text-gray-900">Global Koleksiyon</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <div v-for="product in products" :key="product.sku" 
             class="group bg-white border border-transparent hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden cursor-pointer flex flex-col"
             @click="openModal(product)">
          
          <div class="relative aspect-[230/345] bg-[#f2f2f2]">
            <img :src="product.image" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" referrerpolicy="no-referrer" />
            
            <!-- Compliance Badge: Döküman a53cf4c1 -->
            <div v-if="product.isRealDiscount" class="absolute top-2 left-2 bg-[#f12f91] text-white text-[9px] px-2 py-1 font-black">
              GERÇEK İNDİRİM
            </div>
            
            <!-- Quick Add Overlay -->
            <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 p-3 border-t">
              <button @click.stop="addToCart(product)" class="w-full bg-[#222] text-white py-2 text-[10px] font-bold hover:bg-[#f12f91] transition-colors">HIZLI EKLE</button>
            </div>
          </div>

          <div class="p-3 flex-1 flex flex-col">
            <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{{ product.brand }}</div>
            <h3 class="text-[12px] text-gray-800 font-medium leading-snug line-clamp-2 h-8 mb-2">{{ product.name }}</h3>
            
            <!-- Price Breakdown: Döküman fc9d4bc4 -->
            <div class="mt-auto">
              <div class="flex items-baseline gap-2">
                <span class="text-[15px] font-black text-[#f12f91]">{{ product.price }} TL</span>
                <span v-if="product.oldPrice" class="text-[11px] text-gray-400 line-through font-medium">{{ product.oldPrice }} TL</span>
              </div>
              <!-- AI Meta Data: Döküman cfe52f8f -->
              <p class="text-[9px] text-green-600 font-bold mt-1">✓ {{ product.stockMsg }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Global Split-Order Modal: Döküman 63ad7dfa -->
    <div v-if="selectedProduct" class="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4" @click="selectedProduct = null">
      <div class="bg-white w-full max-w-5xl h-[85vh] flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-300" @click.stop>
        <button @click="selectedProduct = null" class="absolute top-6 right-6 text-2xl text-gray-400 hover:text-[#f12f91] z-10">✕</button>
        
        <div class="md:w-1/2 h-full bg-[#f2f2f2]">
          <img :src="selectedProduct.image" class="w-full h-full object-cover" />
        </div>

        <div class="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div class="mb-10">
            <h4 class="text-sm font-black text-[#f12f91] uppercase tracking-[0.2em] mb-3">{{ selectedProduct.brand }}</h4>
            <h2 class="text-3xl font-medium text-gray-900 leading-tight">{{ selectedProduct.name }}</h2>
          </div>

          <div class="flex items-center gap-6 mb-10">
            <span class="text-5xl font-black text-[#f12f91] tracking-tighter">{{ selectedProduct.price }} TL</span>
            <div class="flex flex-col">
              <span class="text-sm text-gray-400 line-through">{{ selectedProduct.oldPrice }} TL</span>
              <span class="text-xs font-bold text-red-600">ÖZEL FİYAT</span>
            </div>
          </div>

          <!-- Beden & Ülke Uyumu: Döküman fc3180e8 -->
          <div class="space-y-8 mb-12">
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-black uppercase text-gray-400">Beden (EU Standart):</span>
                <span class="text-[10px] font-bold text-[#f12f91] underline cursor-pointer">Beden Tablosu</span>
              </div>
              <div class="flex gap-3">
                <button class="w-14 h-14 border-2 border-[#f12f91] text-[#f12f91] font-black text-sm hover:bg-pink-50 transition-colors">STD</button>
              </div>
            </div>
            
            <!-- Kombin Tamamlayıcı: Döküman b2322382 -->
            <div class="bg-gray-50 p-4 rounded-sm border border-dashed border-gray-200">
              <p class="text-[10px] font-black text-gray-400 uppercase mb-3">STİLİNİ TAMAMLA (AI Önerisi)</p>
              <div class="flex gap-3">
                <div class="w-12 h-16 bg-gray-200 rounded-sm shadow-inner"></div>
                <div class="w-12 h-16 bg-gray-200 rounded-sm shadow-inner"></div>
              </div>
            </div>
          </div>

          <div class="mt-auto space-y-4">
            <button @click="addToCart(selectedProduct)" class="w-full bg-[#f12f91] text-white py-5 text-xl font-black hover:bg-[#d1247d] transition-all shadow-xl shadow-pink-100 flex items-center justify-center gap-4">
              <span>SEPETE EKLE</span>
            </button>
            
            <!-- Yol Stoğu Bilgisi: Döküman fd54652b -->
            <p class="text-center text-[11px] text-gray-500 font-medium italic">🚀 Bu ürün en geç yarın kargoya verilir.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Feed Widget -->
    <LiveFeed />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LiveFeed from '~/components/LiveFeed.vue';

const cartItems = ref([]);
const selectedProduct = ref(null);

const addToCart = (product) => {
  cartItems.value.push(product);
  // Döküman 63ad7dfa: Split order bildirimi simülasyonu
  if(cartItems.value.length > 1) {
    console.log("Kritik: Farklı tedarikçiler nedeniyle sipariş bölünecek!");
  }
};

const openModal = (product) => {
  selectedProduct.value = product;
};

const products = [
  { name: 'Medine İpeği Şal - Siyah', sku: 'MDN-2136-1', price: 249.90, oldPrice: 350.00, brand: 'MODANISA', image: 'https://images.pexels.com/photos/1018945/pexels-photo-1018945.jpeg', isRealDiscount: true, stockMsg: '24 Saatte Kargoda' },
  { name: 'Desenli Vual Eşarp - Mavi', sku: 'MDN-2136-2', price: 175.00, oldPrice: 240.00, brand: 'TUĞBA', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg', isRealDiscount: true, stockMsg: 'Yol Stoğunda' },
  { name: 'Basic Penye Şal - Kum Beji', sku: 'MDN-2136-3', price: 129.50, oldPrice: 180.00, brand: 'MODANISA', image: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg', isRealDiscount: false, stockMsg: 'Stokta Var' },
  { name: 'Pileli Şifon Elbise', sku: 'MDN-2136-4', price: 850.00, oldPrice: 1200.00, brand: 'ALIA', image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg', isRealDiscount: true, stockMsg: '24 Saatte Kargoda' },
  { name: 'Oversize Kaşe Kaban', sku: 'MDN-2136-5', price: 2150.00, oldPrice: 2900.00, brand: 'BENIN', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg', isRealDiscount: true, stockMsg: 'Son 2 Ürün!' },
  { name: 'İpek Karışımlı Şal - Gri', sku: 'MDN-2136-6', price: 299.00, oldPrice: 420.00, brand: 'REFKA', image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg', isRealDiscount: false, stockMsg: 'Hızlı Teslimat' }
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
</style>
