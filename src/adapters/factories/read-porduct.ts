import { productRepository } from "../../repositories/product";
import { readProduct } from "../../use-cases/read-product";
import { readProductController } from "../controllers/product/read";

export function makeReadProduct() {
    const repository = productRepository();
    const useCase = readProduct(repository);
    const controller = readProductController(useCase);

    return controller;
}