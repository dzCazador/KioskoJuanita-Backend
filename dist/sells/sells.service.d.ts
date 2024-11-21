import { Repository } from 'typeorm';
import { Sell } from './sell.entity';
import { SellItem } from './sell-item.entity';
export declare class SellsService {
    private sellRepository;
    private sellItemRepository;
    constructor(sellRepository: Repository<Sell>, sellItemRepository: Repository<SellItem>);
    createSell(fechaHora: string, items: {
        nombreProducto: string;
        cantidad: number;
        precioUnitario: number;
    }[]): Promise<Sell>;
    getSells(): Promise<Sell[]>;
}
