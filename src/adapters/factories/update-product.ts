import { productRepository } from "../../repositories/product";
import { updateProduct } from "../../use-cases/update-product";
import { readProduct } from "../../use-cases/read-product";
import { updateProductController } from "../controllers/product/update";

export function makeUpdateProduct() {
    const repository = productRepository();
    const useCaseUpdate = updateProduct(repository);
    const useCaseRead = readProduct(repository)
    const controller = updateProductController(useCaseUpdate, useCaseRead);

    return controller;
}