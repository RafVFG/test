import { ProductRepositoryMethods } from "../../repositories/product/interfaces/methods";
import { DeleteProductMethods } from "./interfaces/methods";

export function deleteProduct(userRepository: ProductRepositoryMethods): DeleteProductMethods {
    async function run(id: number): Promise<number | null> {
        await userRepository.del(id);

        return id;
    }

    return {
        run
    }
}