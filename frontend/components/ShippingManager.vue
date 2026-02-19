<template>
  <div class="bg-white p-6 rounded shadow-sm border">
    <div class="flex justify-between items-center mb-6">
      <h3 class="font-bold text-lg">Kargo Yönetimi</h3>
      <span class="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">ARAS KARGO</span>
    </div>

    <div v-if="!shipmentCreated" class="space-y-4">
      <div class="p-4 bg-gray-50 rounded border border-dashed border-gray-300">
        <p class="text-sm text-gray-600 mb-2">Sipariş Hazır mı?</p>
        <button @click="createLabel" class="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition">
          KARGO BARKODU OLUŞTUR
        </button>
      </div>
    </div>

    <div v-else class="space-y-4">
      <div class="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded">
        <div class="text-2xl">📦</div>
        <div>
          <div class="text-xs text-green-700 font-bold uppercase">Barkod Hazır</div>
          <div class="text-sm font-mono font-bold">{{ trackingNumber }}</div>
        </div>
        <button class="ml-auto text-blue-600 text-sm font-bold underline">YAZDIR (PDF)</button>
      </div>

      <div class="border-t pt-4">
        <h4 class="text-xs font-bold text-gray-500 uppercase mb-3">Takip Geçmişi</h4>
        <div class="space-y-3">
          <div v-for="(event, i) in history" :key="i" class="flex gap-3 text-xs">
            <div class="text-gray-400 w-24">{{ event.time }}</div>
            <div class="text-gray-700 font-medium">{{ event.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shipmentCreated = ref(false);
const trackingNumber = ref('MN-1740000000-542');
const history = ref([
  { time: '14:20', text: 'Kargo çıkış şubesinde bekliyor.' },
  { time: '10:00', text: 'Barkod satıcı tarafından oluşturuldu.' }
]);

const createLabel = () => {
  shipmentCreated.value = true;
};
</script>
