# Modanisa-MP Marketplace API Specification (v1)

## Base URL
`https://api.modanisa-mp.com/api/v1/marketplace`

## Authentication
**HTTP Basic Auth** (Vendor Credentials)
`Authorization: Basic <base64(username:password)>`

---

## 1. Catalog Management

### POST `/products`
Create a new product or variant.
**Payload:**
```json
{
  "vendor_sku": "TS-123-BLK-XL",
  "name": "Siyah Tesettür Tunik",
  "category_id": 452,
  "brand_id": 88,
  "description": "Yüksek kaliteli pamuklu kumaş...",
  "attributes": [
    { "id": "color", "value": "Siyah" },
    { "id": "size", "value": "XL" },
    { "id": "material", "value": "Cotton" }
  ],
  "images": ["https://cdn.vendor.com/img1.jpg"],
  "price": 450.00,
  "currency": "TRY",
  "stock_quantity": 50
}
```

### PUT `/products/{vendor_sku}/price`
Fast price update.
**Payload:** `{"price": 425.00, "currency": "TRY"}`

### PUT `/products/{vendor_sku}/stock`
Real-time stock adjustment.
**Payload:** `{"quantity": 45}`

---

## 2. Order Management

### GET `/orders`
Fetch orders for the vendor.
**Query Params:** `status` (pending, shipped, cancelled), `since` (ISO date), `limit`.

### POST `/orders/{order_id}/ship`
Mark order as shipped with tracking info.
**Payload:**
```json
{
  "tracking_number": "TR123456789",
  "carrier_code": "ARAS"
}
```

---

## 3. Webhooks
Vendors can register a callback URL to receive real-time notifications.
- `ORDER_CREATED`: New order received.
- `ORDER_CANCELLED`: Customer cancelled before shipment.
- `STOCK_ALERT`: Inventory reaching critical levels.
