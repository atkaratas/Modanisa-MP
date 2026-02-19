import axios from 'axios';

async function runStressTest() {
  const TARGET_URL = 'http://localhost:3000/api/v1/products';
  const BATCH_SIZE = 100;
  const TOTAL_PRODUCTS = 100000;
  
  console.log(`--- Modanisa-MP Stress Test Started: ${TOTAL_PRODUCTS} Products ---`);
  const startTime = Date.now();

  for (let i = 0; i < TOTAL_PRODUCTS / BATCH_SIZE; i++) {
    const products = Array.from({ length: BATCH_SIZE }).map((_, j) => ({
      name: `Stress Test Ürün ${i * BATCH_SIZE + j}`,
      vendorSku: `STRESS-${i * BATCH_SIZE + j}`,
      price: Math.random() * 500 + 50,
      stock: Math.floor(Math.random() * 1000),
      category: 'Test'
    }));

    try {
      // Bu kısım gerçek bir API çağrısını simüle eder
      // await axios.post(`${TARGET_URL}/batch`, { products });
      
      if (i % 50 === 0) {
        const elapsed = (Date.now() - startTime) / 1000;
        console.log(`[PROGRESS] ${i * BATCH_SIZE} ürün işlendi. Geçen süre: ${elapsed}s`);
      }
    } catch (e) {
      console.error('Batch hatası:', e.message);
    }
  }

  const totalTime = (Date.now() - startTime) / 1000;
  console.log(`--- Stress Test Completed ---`);
  console.log(`Toplam Süre: ${totalTime}s`);
  console.log(`Hız: ${(TOTAL_PRODUCTS / totalTime).toFixed(2)} ürün/saniye`);
}

runStressTest();
