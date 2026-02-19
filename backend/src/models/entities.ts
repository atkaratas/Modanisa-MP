import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';

export enum LegalEntity {
  TR = 'MODANISA_TR',
  USA = 'MODANISA_USA',
  EU = 'MODANISA_EU'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  SPLIT = 'SPLIT',
  READY_TO_SHIP = 'READY_TO_SHIP',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  PARTIAL_CANCELLED = 'PARTIAL_CANCELLED',
  RETURNED = 'RETURNED'
}

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  country: string; // Geographic Eligibility: Egypt, Bangladesh, etc.

  @Column({ type: 'enum', enum: LegalEntity })
  linkedEntity: LegalEntity;

  @Column('jsonb', { nullable: true })
  documents: { license: string, tax_cert: string };

  @OneToMany(() => Product, product => product.vendor)
  products: Product[];
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerName: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column('decimal')
  totalPrice: number;

  @Column('jsonb')
  priceBreakdown: { base: number, tax: number, discount: number, shipping: number };

  @OneToMany(() => OrderItem, item => item.order)
  items: OrderItem[];
}

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, order => order.items)
  order: Order;

  @Column()
  sku: string;

  @Column()
  vendorId: string;

  @Column({ nullable: true })
  trackingNumber: string;

  @Column({ default: 'IN_DEPOT' }) // IN_DEPOT, IN_TRANSIT, IN_STORE (Yol Stoğu Mantığı)
  stockStatus: string;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  sku: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  last30DayLowPrice: number; // Yasal Çizili Fiyat Denetimi için

  @ManyToOne(() => Vendor, vendor => vendor.products)
  vendor: Vendor;

  @Column('jsonb', { nullable: true })
  translations: { en: string, ar: string, fr: string };
}
