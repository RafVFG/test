import { HttpRequest, HttpResponse } from "./interfaces/http-read";
import { response } from "../interfaces/status-code";
import { ReadProductMethods } from "../../../use-cases/read-product/intefaces/methods";

export function readProductController(readProduct: ReadProductMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { query }  = httpRequest;
        const res = response();
        
        const filter = {
            idUserCreate: query.idUserCreate,
            idCompany: query.idCompany
        }
        
        let productOrError
        
        try {
            productOrError = await readProduct.run(filter);
     
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }
        
        if(!productOrError) return res.notFound("Product not found");
        return res.ok(productOrError);
    }

    return {
        handle
    }
}
