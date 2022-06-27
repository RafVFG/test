import { DeleteProductMethods } from "../../../use-cases/delete-product/interfaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-delete";
import { response } from "../interfaces/status-code";

export function deleteProductController(deleteProduct: DeleteProductMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest;
        const res = response();
        
        if(!id) return res.badRequest(`Missing param: id`);

        await deleteProduct.run(id);
        
        return res.ok(id);
    }

    return {
        handle
    }
}
