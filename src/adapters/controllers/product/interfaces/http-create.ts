import { Product } from "../../../../use-cases/create-product/interfaces/product"

export interface HttpRequest {
    body: Product
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}