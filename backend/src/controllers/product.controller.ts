import { Controller, Get, Post, Body, Param, Put, Query, UseGuards } from '@nestjs/common';
import { Product } from '../models/entities';
import { ProductOwnershipGuard } from '../auth/ownership.guard';

@Controller('api/v1/products')
export class ProductController {
  private products: Product[] = [];

  @Get()
  findAll(@Query('category') categoryId?: number) {
    return { status: 'success', data: this.products };
  }

  @Post()
  @UseGuards(ProductOwnershipGuard)
  create(@Body() productData: Partial<Product>) {
    return { status: 'success', message: 'Product created', data: productData };
  }

  @Put(':sku/stock')
  @UseGuards(ProductOwnershipGuard)
  updateStock(@Param('sku') sku: string, @Body('quantity') quantity: number) {
    return { status: 'success', sku, newStock: quantity };
  }
}
