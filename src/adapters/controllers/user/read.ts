import { HttpRequest, HttpResponse } from "./interfaces/http-read";
import { response } from "../interfaces/status-code";
import { ReadUserMethods } from "../../../use-cases/read-user/interfaces/methods";

export function readUserController(readUser: ReadUserMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest;
        const res = response();

        if(!id) return res.badRequest(`Missing param: id`);

        let userOrError

        try {
            userOrError = await readUser.run(id);
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }

        if(!userOrError) return res.notFound("User not found");
        
        return res.ok(userOrError);
    }

    return {
        handle
    }
}
