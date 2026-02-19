import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Product } from '../models/entities';

@Injectable()
export class ProductOwnershipGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // JWT'den gelen satıcı bilgisi
    const sku = request.params.sku || request.body.vendorSku;

    if (!user || user.role !== 'vendor') return false;

    // Gerçek uygulamada DB kontrolü yapılır:
    // const product = await this.productRepository.findOne({ where: { vendorSku: sku, vendor: { id: user.sub } } });
    // if (!product) throw new ForbiddenException('Bu ürün size ait değil!');

    console.log(`[Security Guard] Access granted for Vendor ${user.sub} to SKU ${sku}`);
    return true;
  }
}
