import { productRepository } from "../../repositories/product";
import { createProduct } from "../../use-cases/create-product";
import { createProductController } from "../controllers/product/create";

export function makeCreateProduct() {
    const repository = productRepository();
    const useCase = createProduct(repository);
    const controller = createProductController(useCase);

    return controller;
}