<template>
  <div class="md:hidden flex flex-col min-h-screen bg-white">
    <!-- Mobile Tab Navigation (Fixed Bottom) -->
    <nav class="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 z-50 shadow-lg">
      <div v-for="item in nav" :key="item.name" class="flex flex-col items-center gap-1">
        <span class="text-xl">{{ item.icon }}</span>
        <span class="text-[10px] font-medium uppercase tracking-tighter">{{ item.name }}</span>
      </div>
    </nav>

    <!-- App-like Header -->
    <header class="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-40">
      <button class="text-xl">☰</button>
      <h1 class="font-black text-pink-600 tracking-tighter text-xl italic">MODANISA</h1>
      <button class="text-xl">🛒</button>
    </header>

    <!-- Mobile Hero -->
    <div class="w-full aspect-square bg-pink-50 flex items-center justify-center p-8 text-center">
      <div>
        <h2 class="text-3xl font-bold text-pink-600 mb-2">Büyük İndirim Başladı</h2>
        <p class="text-sm text-gray-600 mb-4">Seçili ürünlerde %50'ye varan fırsatlar</p>
        <button class="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase">Keşfet</button>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-4 gap-2 p-4">
      <div v-for="cat in 4" :key="cat" class="flex flex-col items-center gap-2">
        <div class="w-16 h-16 rounded-full bg-gray-100 border"></div>
        <span class="text-[10px] font-bold">Kategori</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const nav = [
  { name: 'Ana Sayfa', icon: '🏠' },
  { name: 'Kategoriler', icon: '🔍' },
  { name: 'Favoriler', icon: '🤍' },
  { name: 'Hesabım', icon: '👤' }
];
</script>

<style scoped>
/* App-like feel */
body {
  -webkit-tap-highlight-color: transparent;
}
</style>
