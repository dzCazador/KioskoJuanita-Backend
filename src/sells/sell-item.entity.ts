import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sell } from './sell.entity';

@Entity()
export class SellItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sell, (sell) => sell.items)
  sell: Sell;

  @Column()
  nombreProducto: string;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precioUnitario: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;
}
