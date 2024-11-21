import { SellsService } from './sells.service';
export declare class SellsController {
    private readonly sellsService;
    constructor(sellsService: SellsService);
    createSell(createSellDto: {
        fechaHora: string;
        items: {
            nombreProducto: string;
            cantidad: number;
            precioUnitario: number;
        }[];
    }): Promise<import("./sell.entity").Sell>;
    getSells(): Promise<import("./sell.entity").Sell[]>;
}
