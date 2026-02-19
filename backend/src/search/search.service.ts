import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class SearchService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    });
  }

  async indexProduct(product: any) {
    return this.client.index({
      index: 'products',
      id: product.id,
      document: {
        name: product.name,
        description: product.description,
        category: product.category.name,
        vendor: product.vendor.name,
        price: product.price,
        attributes: product.variantAttributes, // { color: "Black", size: "XL" }
        stock: product.stock,
      },
    });
  }

  async searchProducts(query: string, filters: any) {
    const must: any[] = [
      { multi_match: { query, fields: ['name', 'description', 'category'] } }
    ];

    if (filters.color) must.push({ term: { 'attributes.color': filters.color } });
    if (filters.size) must.push({ term: { 'attributes.size': filters.size } });

    const result = await this.client.search({
      index: 'products',
      query: { bool: { must } },
    });

    return result.hits.hits.map(hit => hit._source);
  }
}
