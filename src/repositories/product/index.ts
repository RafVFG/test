import { connection } from "../../main/config/connection-mysql";
import { ProductRepositoryMethods } from "./interfaces/methods";
import { Product as ProductOfCreate } from "../../use-cases/create-product/interfaces/product";
import { Filter, Product as ProductOfRead } from "../../use-cases/read-product/intefaces/product";

export function productRepository(): ProductRepositoryMethods {
    const database = connection();

    async function create(product: ProductOfCreate): Promise<number> {
        const { insertId } = await database.execute(
            `insert into product (
                name,
                value,
                idUserCreate,
                idCompany)
            values(
                '${product.name}',
                ${product.value},
                ${product.idUserCreate},
                ${product.idCompany}
                
            )`
        )

        return insertId
    }

    async function read(filter: string[]): Promise<ProductOfRead[] | null> {
        const result = await database.execute(
            ` select 
                * 
            from product
            where ${filter.join(" ")} del = 0;`
        )

         if(!result) return null;
        
         return result;

    }

    async function readWithIdUserCreate(filter: Filter): Promise<ProductOfRead | null> {
        const [result] = await database.execute(
            ` select 
                * 
            from product
            where idUserCreate = ${filter.idUserCreate} and del = 0;`
        )

        if(!result) return null;
        
        return result;
    }

    async function readWithIdCompany(filter: Filter): Promise<ProductOfRead | null> {
        const [result] = await database.execute(
            ` select 
                * 
            from product
            where idCompany = ${filter.idCompany} and del = 0;`
        )

        if(!result) return null;
        
        return result;
    }

    async function update(id: number, product: string[]): Promise<void> {
        return database.execute(
            ` update ignore product
            set ${product}
            where id = ${id};` 
        )
    }

    async function del(id: number): Promise<void> {
        return database.execute(
            ` update product
            set del = 1
            where id = ${id};`
        )
    }

    return {
        create,
        read,
        readWithIdUserCreate,
        readWithIdCompany,
        update,
        del
    }
}