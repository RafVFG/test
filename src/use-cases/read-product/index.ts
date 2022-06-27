import { ProductRepositoryMethods } from "../../repositories/product/interfaces/methods";
import { ReadProductMethods } from "./intefaces/methods";
import { Filter, Product } from "./intefaces/product";

export function readProduct(productRepository: ProductRepositoryMethods): ReadProductMethods {
    async function run(filterProduct: Filter): Promise<Product | null> {
        const filter = []; 

        Object.keys(filterProduct).forEach((key) => {
           if(filterProduct[key]) filter.push(`${key} = ${filterProduct[key]} and`)
        })

        const productExists  = await productRepository.read(filter);
        if(!productExists) return null;
        
        return productExists;
    }
 
    return {
        run
    }
}