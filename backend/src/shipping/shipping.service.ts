import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ShippingService {
  // Aras, Yurtiçi, MNG vb. entegrasyonları için base config
  private readonly CARRIER_CONFIG = {
    ARAS: {
      url: 'https://api.araskargo.com.tr/service/shipping',
      user: process.env.ARAS_USER,
      pass: process.env.ARAS_PASS,
    }
  };

  /**
   * Satıcı ürünü paketlediğinde kargo barkodu oluşturur.
   */
  async createShipment(orderData: any) {
    const payload = {
      orderId: orderData.id,
      receiverName: orderData.customerName,
      receiverAddress: orderData.address,
      receiverPhone: orderData.phone,
      content: orderData.items.map(i => i.name).join(', '),
      payor: 'VENDOR', // veya 'MARKETPLACE'
    };

    try {
      // Gerçek senaryoda kargo API'sine istek atılır
      // const response = await axios.post(this.CARRIER_CONFIG.ARAS.url, payload);
      
      const mockTrackingNumber = `MN-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      const mockBarcodeUrl = `https://api.modanisa-mp.com/v1/labels/${mockTrackingNumber}.pdf`;

      return {
        success: true,
        carrier: 'ARAS',
        trackingNumber: mockTrackingNumber,
        barcodeUrl: mockBarcodeUrl,
        labelData: 'BASE64_PDF_CONTENT'
      };
    } catch (error) {
      throw new InternalServerErrorException('Kargo barkodu oluşturulamadı.');
    }
  }

  /**
   * Kargo takip numarası ile anlık durum sorgulama
   */
  async trackShipment(trackingNumber: string) {
    // Kargo firmasından gelen durum kodlarını bizim sistemimize map ederiz
    const statusMap = {
      'DELIVERED': 'Teslim Edildi',
      'IN_TRANSIT': 'Yolda',
      'OUT_FOR_DELIVERY': 'Dağıtımda',
      'RETURNED': 'İade Edildi'
    };

    return {
      trackingNumber,
      currentStatus: statusMap['IN_TRANSIT'],
      lastUpdate: new Date().toISOString(),
      history: [
        { time: '2026-02-19 10:00', event: 'Paket kargoya verildi.' },
        { time: '2026-02-19 14:00', event: 'Aktarma merkezinde.' }
      ]
    };
  }
}
