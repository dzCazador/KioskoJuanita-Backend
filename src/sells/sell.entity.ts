import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SellItem } from './sell-item.entity';

@Entity()
export class Sell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaHora: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @OneToMany(() => SellItem, (sellItem) => sellItem.sell)
  items: SellItem[];
}
