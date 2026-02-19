import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  /**
   * Müşteri ve Satıcıya SMS/Email/Push gönderir.
   */
  async send(target: 'CUSTOMER' | 'VENDOR', type: string, data: any) {
    const templates = {
      ORDER_CONFIRMED: `Sayın ${data.name}, siparişiniz onaylandı! Sipariş No: ${data.orderId}`,
      SHIPPED: `Kargonuz yola çıktı! Takip No: ${data.trackingNumber}`,
      PAYOUT_SENT: `Hakedişiniz hesabınıza yatırıldı: ${data.amount} TL`
    };

    console.log(`[Notification] To: ${target} | Message: ${templates[type]}`);
    
    // Entegrasyon Noktaları:
    // SMS: Twilio / Netgsm API
    // Email: SendGrid / Postmark
    // Push: Firebase Cloud Messaging (FCM)
    
    return { success: true, timestamp: new Date() };
  }
}
