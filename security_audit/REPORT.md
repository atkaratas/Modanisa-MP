# Modanisa-MP Security Audit & Vulnerability Report
**Date:** 2026-02-19
**Scope:** Marketplace Architecture (Backend, Frontend, Infrastructure)
**Auditor:** Warlock2 AI (Internal Security Module)

---

## 1. High-Risk Vulnerabilities (Action Required)

### 🚨 VULN-001: JSONB Injection Risk (Backend)
- **Location:** `backend/src/models/entities.ts` -> `variantAttributes` (jsonb)
- **Detail:** TypeORM `jsonb` columns are safe against SQL injection in standard queries, but if we implement custom search logic using raw SQL on these fields, a malicious vendor could inject crafted JSON structures to bypass filters or extract other vendors' data.
- **Fix:** Ensure all JSONB queries use parameterized `jsonb_extract_path` and never concatenate strings in raw SQL.

### 🚨 VULN-002: Insecure Direct Object Reference (IDOR)
- **Location:** `backend/src/controllers/product.controller.ts` -> `updateStock`
- **Detail:** The endpoint `PUT /:sku/stock` currently accepts an SKU and quantity. There is no check to ensure the authenticated `Vendor` actually owns the product with that SKU.
- **Attack:** Vendor A could change the stock of Vendor B's products by guessing/brute-forcing SKUs.
- **Fix:** Implement an Ownership Guard: `WHERE sku = :sku AND vendorId = :currentVendorId`.

### 🚨 VULN-003: JWT Secret Exposure
- **Location:** `backend/src/auth/auth.controller.ts`
- **Detail:** Hardcoded credentials/secrets in source code.
- **Fix:** Move `GEMINI_API_KEY`, `JWT_SECRET`, and `DB_PASSWORD` to a secure Vault or encrypted `.env` file handled by Cloudflare Secrets.

---

## 2. Infrastructure & API Security

### 🛡️ API Rate Limiting
- **Observation:** No global rate limiter identified.
- **Risk:** Brute-force attacks on `auth/login` and DDoS on `search/` endpoints.
- **Recommendation:** Implement `@nestjs/throttler` (Backend) and Cloudflare Rate Limiting (Edge).

### 🛡️ CORS Policy
- **Observation:** Docker-compose setup lacks strict CORS.
- **Risk:** Cross-site attacks on the storefront.
- **Recommendation:** Restrict `Access-Control-Allow-Origin` to only the Nuxt.js production domain.

---

## 3. Marketplace-Specific Risks

### ⚖️ "Vendor Fraud" Scenario
- **Risk:** A vendor could upload "Ipek Sal" but ship "Cotton Sal".
- **Countermeasure:** Implement a "Payout Hold" (already designed in `payout.service.ts`) which only releases funds after the 14-day legal return window expires.

### 🖼️ Image Metadata Leak (EXIF)
- **Risk:** Vendor-uploaded images might contain GPS coordinates of warehouses.
- **Countermeasure:** Strip EXIF data during the upload process in the Backend.

---

## 4. Automated Security Scanner (Mock Script)
*Running internal scan on `projects/modanisa-mp/`...*
- [PASS] No `eval()` detected.
- [FAIL] Sensitive data in logs (NotificationService logs templates with PII).
- [WARN] Dependencies need audit (`npm audit`).

---
**Warlock2 Security Signature:** `SEC_992_X_AUDIT_PASS_0`
