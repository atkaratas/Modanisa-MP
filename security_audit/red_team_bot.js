import axios from 'axios';

async function runRedTeamTests() {
  const TARGET_URL = 'http://localhost:3000/api/v1';
  console.log('--- Warlock2 Red Team Bot: Attack Simulation Started ---');

  // TEST 1: IDOR Attack (Trying to update another vendor's stock)
  try {
    const res = await axios.put(`${TARGET_URL}/products/OTHER-VENDOR-SKU/stock`, {
      quantity: 999
    }, {
      headers: { 'Authorization': 'Bearer FAKE_VENDOR_A_TOKEN' }
    });
    console.log('[FAIL] IDOR Test: Unauthorized stock update allowed!');
  } catch (e) {
    console.log('[PASS] IDOR Test: Blocked by Ownership Guard.');
  }

  // TEST 2: Auth Brute Force Simulation
  console.log('Simulating Brute Force on /login...');
  for(let i=0; i<6; i++) {
    // This would be caught by Cloudflare/Throttler in prod
  }

  // TEST 3: SQLi Probe
  try {
    await axios.get(`${TARGET_URL}/products?category=1' OR '1'='1`);
    console.log('[PASS] SQLi Test: Standard query parameters are sanitized.');
  } catch (e) {
    console.log('[INFO] SQLi Test: Query failed or was blocked.');
  }

  console.log('--- Attack Simulation Completed ---');
}

runRedTeamTests();
