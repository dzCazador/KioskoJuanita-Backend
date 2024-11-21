import { Repository } from 'typeorm';
import { ProductDto } from './products.dto';
export declare class ProductsService {
    private readonly repo;
    constructor(repo: Repository<ProductDto>);
    create(product: ProductDto): Promise<ProductDto>;
    list(): Promise<ProductDto[]>;
    findByName(name: string): Promise<ProductDto[]>;
}
