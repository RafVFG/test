import { Product } from "../../../../use-cases/update-product/interfaces/product";

export interface HttpRequest {
    id: number,
    body: Product
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}