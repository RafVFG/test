import { CreateProductMethods } from "./interfaces/methods";
import { ProductRepositoryMethods } from "../../repositories/product/interfaces/methods";
import { Product } from "./interfaces/product";
import { ProductEntity } from "../../entities/product";

export function createProduct(productRepository: ProductRepositoryMethods): CreateProductMethods {
    async function run(product: Product): Promise<number | null> {
        const productOrError = ProductEntity(product);
        if(!productOrError) return null;
        
        const data = productOrError.getValue();

        return await productRepository.create(data);
    }

    return {
        run
    }
}
