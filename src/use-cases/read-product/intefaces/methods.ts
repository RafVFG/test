import { Filter, Product } from "./product";

export interface ReadProductMethods {
    run: (filterProduct: Filter) => Promise<Product | null>
}