import { UpdateProductMethods } from "../../../use-cases/update-product/interfaces/methods";
import { ReadProductMethods } from "../../../use-cases/read-product/intefaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-update";
import { response } from "../interfaces/status-code";

export function updateProductController(updateProduct: UpdateProductMethods, readProduct: ReadProductMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id, body } = httpRequest;
        const fieldsMissing: string[] = [];
        const res = response();

        if(!id) return res.badRequest(`Missing param: id`);
        
        const product = {
            name: body.name,
            value: body.value,
            idCompany: body.idCompany,
            idUserCreate: body.idUserCreate
        };

        Object.keys(product).forEach((key) => {
            if(!product[key]) fieldsMissing.push(key);
        })

        if(fieldsMissing.length == Object.keys(product).length) 
            return res.badRequest(`Missing params: ${fieldsMissing}`);

        let productOrError

        try {
            productOrError = await readProduct.run(id);
            if(!productOrError) return res.notFound("Product not found");
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }

        let newProductData

        try {
            newProductData = await updateProduct.run(id, product, productOrError);
            if(!newProductData) return res.notFound("Update failed");
        } catch (error) {
            res.serverError(`Internal: ${error}`)
        }

        return res.ok();
    }

    return {
        handle
    }
}