import { Product } from "../../../entities/product/interfaces/product";

export interface ProductRepositoryMethods {
    create: (data: Product) => Promise<void>
}