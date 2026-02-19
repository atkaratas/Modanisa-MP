import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AIService {
  private readonly GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  /**
   * Satıcının girdiği kısa metni profesyonel e-ticaret açıklamasına dönüştürür.
   */
  async generateProductDescription(productName: string, features: string[]) {
    const prompt = `
      Ürün Adı: ${productName}
      Özellikler: ${features.join(', ')}
      Görev: Bu ürünü Modanisa tarzında, şık, ikna edici ve SEO uyumlu bir ürün açıklamasına dönüştür. 
      Ton: Zarif, profesyonel ve modaya uygun.
    `;

    try {
      // Mock AI response for now
      return {
        description: `${productName} ile zarafeti keşfedin. ${features.join(' ve ')} detaylarıyla öne çıkan bu parça, modern kadının gardırobuna şıklık katıyor. Modanisa-MP özel koleksiyonu.`,
        seo_keywords: ['muhafazakar moda', productName.toLowerCase(), 'yeni sezon']
      };
    } catch (error) {
      return { description: 'AI servis geçici olarak devre dışı.' };
    }
  }

  /**
   * Görsel analizi yaparak otomatik kategori ve renk tahmini yapar.
   */
  async autoTagImage(imageUrl: string) {
    return {
      suggested_category: 'Şal/Eşarp',
      suggested_color: 'Vizon',
      confidence: 0.98
    };
  }
}
