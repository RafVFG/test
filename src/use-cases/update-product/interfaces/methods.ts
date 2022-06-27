import { Product as ProductOfUpdate } from "./product";
import { Product as ProductOfRead } from "../../read-product/intefaces/product";

export interface UpdateProductMethods {
    run: (id: number, product: ProductOfUpdate, currentProduct: ProductOfRead) => Promise<number | null> 
}