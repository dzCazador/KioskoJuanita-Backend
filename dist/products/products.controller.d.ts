import { ProductsService } from './products.service';
import { ProductDto } from './products.dto';
import { Response } from 'express';
export declare class ProductsController {
    private readonly service;
    constructor(service: ProductsService);
    create(product: ProductDto, response: Response): Promise<void>;
    findAll(response: Response): Promise<void>;
    searchProducts(name: string, response: Response): Promise<void>;
}
