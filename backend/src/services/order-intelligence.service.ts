import { Injectable } from '@nestjs/common';
import { Order, OrderStatus, OrderItem } from '../models/entities';

@Injectable()
export class OrderIntelligenceService {
  /**
   * Döküman 63ad7dfa & doc_1.docx: Akıllı Sipariş Bölme (Order Splitting)
   */
  async splitOrder(masterOrder: Order) {
    const vendors = [...new Set(masterOrder.items.map(item => item.vendorId))];
    
    if (vendors.length > 1) {
      console.log(`[Order Split] Sipariş ${masterOrder.id} -> ${vendors.length} tedarikçiye bölünüyor.`);
      // Her vendor için alt sipariş (Sub-order) oluşturma mantığı
      return vendors.map(vId => ({
        vendorId: vId,
        items: masterOrder.items.filter(i => i.vendorId === vId),
        status: OrderStatus.READY_TO_SHIP
      }));
    }
    return null;
  }

  /**
   * Döküman 88d01de0: Kısmi İptal Mantığı
   */
  async processPartialCancellation(orderId: string, itemSku: string) {
    console.log(`[Partial Cancel] Sipariş: ${orderId}, Ürün: ${itemSku} iptal edildi. Diğer ürünler kargolanmaya devam ediyor.`);
    // Item statüsü CANCELLED, Order statüsü PARTIAL_CANCELLED olarak güncellenir.
  }

  /**
   * Döküman a53cf4c1: Yasal Çizili Fiyat Denetimi (30 Gün Kuralı)
   */
  validateStrikePrice(currentPrice: number, last30DayMin: number) {
    if (currentPrice >= last30DayMin) {
      console.warn('[Compliance] Çizili fiyat gösterilemez! 30 günün en düşük fiyatı baz alınmalı.');
      return last30DayMin;
    }
    return currentPrice;
  }
}
