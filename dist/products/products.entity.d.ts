import { Int32 } from "typeorm";
export declare class Product {
    id: number;
    name: string;
    price: number;
    quantity: Int32;
    provider: string;
}
