<template>
  <div class="fixed bottom-4 right-4 w-72 bg-black/90 text-white rounded-xl shadow-2xl border border-pink-500/50 overflow-hidden font-mono text-[10px]">
    <div class="bg-pink-600 p-2 flex justify-between items-center">
      <span class="font-bold">LIVE FEED: OTONOM EKONOMİ</span>
      <span class="animate-pulse text-white">● CANLI</span>
    </div>
    <div class="p-3 space-y-2 h-48 overflow-y-auto" ref="feedBox">
      <div v-for="(log, i) in logs" :key="i" class="border-l-2 border-pink-500 pl-2 py-1 bg-white/5">
        <span class="text-pink-400">[{{ log.time }}]</span> {{ log.msg }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const logs = ref([
  { time: '10:45', msg: 'Bot: Modanisa fiyatları tarandı.' },
  { time: '10:46', msg: 'PricingBot: 12 üründe %5 indirim uygulandı.' },
  { time: '10:47', msg: 'Mirror: 4 yeni görsel CDN üzerinden eşlendi.' }
]);

onMounted(() => {
  setInterval(() => {
    const actions = [
      'Sipariş alındı: MDN-2026-001',
      'AI: Ürün açıklaması optimize edildi.',
      'Kargo: MN-1740-X barkod üretildi.',
      'Finans: 145.20 TL hakediş hesaplandı.'
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const now = new Date();
    logs.value.unshift({ 
      time: `${now.getHours()}:${now.getMinutes()}`, 
      msg: randomAction 
    });
    if (logs.value.length > 10) logs.value.pop();
  }, 5000);
});
</script>
