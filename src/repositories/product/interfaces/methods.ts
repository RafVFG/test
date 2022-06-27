import { Product as ProductOfCreate } from "../../../use-cases/create-product/interfaces/product";
import { Filter, Product as ProductOfRead } from "../../../use-cases/read-product/intefaces/product";

export interface ProductRepositoryMethods {
    create: (product: ProductOfCreate) => Promise<number>
    read: (filter: string[]) => Promise<ProductOfRead[] | null>
    readWithIdUserCreate: (filter: Filter) => Promise<ProductOfRead | null>
    readWithIdCompany: (filter: Filter) => Promise<ProductOfRead | null>
    update: (id: number, product: string[]) => Promise<void>
    del: (id: number) => Promise<void>
}