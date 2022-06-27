import { ProductRepositoryMethods } from "../../repositories/product/interfaces/methods";
import { UpdateProductMethods } from "./interfaces/methods";
import { Product as ProductOfUpdate } from "../../use-cases/update-product/interfaces/product";
import { ProductEntity } from "../../entities/product";

export function updateProduct(productRepository:ProductRepositoryMethods): UpdateProductMethods {
    async function run(id: number, product: ProductOfUpdate): Promise<number | null> {
        const productOrError = ProductEntity(product);
        if(!productOrError) return null;
        
        const newProduct: string[] = [];
        Object.keys(product).forEach((key) => {
            if(product[key]) newProduct.push(`${key} = '${product[key]}'`);
        })

        await productRepository.update(id, newProduct);

        return id;
    }

    return {
        run
    }
}