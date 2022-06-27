import { Product } from "./product";

export interface CreateProductMethods {
    run: (product: Product) => Promise<number | null> 
}