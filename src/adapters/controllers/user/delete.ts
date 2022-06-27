import { DeleteUserMethods } from "../../../use-cases/delete-user/interfaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-delete";
import { response } from "../interfaces/status-code";

export function deleteUserController(deleteUser: DeleteUserMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest;
        const res = response();
        
        if(!id) return res.badRequest(`Missing param: id`);

        await deleteUser.run(id);
        
        return res.ok(id);
    }

    return {
        handle
    }
}
