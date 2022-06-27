import { CreateProductMethods } from "../../../use-cases/create-product/interfaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-create";
import { response } from "../interfaces/status-code";

export function createProductController(createProduct: CreateProductMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest;
        const fieldsMissing: string[] = [];
        const res = response();

        const product = {
            name: body.name,
            value: body.value,
            idUserCreate: body.idUserCreate,
            idCompany: body.idCompany
        };

        Object.keys(product).forEach((key) => {
            if(!product[key]) fieldsMissing.push(key);
        })

        if(fieldsMissing.length > 0) return res.badRequest(`Missing params: ${fieldsMissing}`);
        
        let idOrError

        try {
            idOrError = await createProduct.run(product)
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }
        if(!idOrError) return res.badRequest("Product invalid");


        return res.ok(idOrError);
    } 

    return {
        handle
    }
}