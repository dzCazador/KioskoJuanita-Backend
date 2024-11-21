import { SellItem } from './sell-item.entity';
export declare class Sell {
    id: number;
    fechaHora: Date;
    total: number;
    items: SellItem[];
}
