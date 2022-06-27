import { productRepository } from "../../repositories/product";
import { deleteProduct } from "../../use-cases/delete-product";
import { deleteProductController } from "../controllers/product/delete";

export function makeDeleteProduct() {
    const repository = productRepository();
    const useCase = deleteProduct(repository);
    const controller = deleteProductController(useCase);

    return controller;
}