import { Injectable } from '@nestjs/common';

@Injectable()
export class PayoutService {
  private readonly COMMISSION_RATE = 0.15; // %15 Modanisa-MP Komisyonu

  /**
   * Teslim edilen siparişin hakedişini hesaplar.
   */
  async calculatePayout(order: any) {
    const totalAmount = order.total;
    const commission = totalAmount * this.COMMISSION_RATE;
    const vendorPayout = totalAmount - commission;

    return {
      orderId: order.id,
      grossAmount: totalAmount,
      commissionAmount: commission,
      netPayout: vendorPayout,
      status: 'PENDING_TRANSFER', // Transfer emri bekliyor
      scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 gün sonra ödeme (iade süresi)
    };
  }

  /**
   * Banka entegrasyonu (Iyzico Payout / Paraşüt vb.)
   */
  async executeTransfer(payoutId: string) {
    // Banka API call logic here
    return { success: true, transferReference: 'BANK-TX-9988' };
  }
}
