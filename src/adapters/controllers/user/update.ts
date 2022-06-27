import { UpdateUserMethods } from "../../../use-cases/update-user/interfaces/methods";
import { ReadUserMethods } from "../../../use-cases/read-user/interfaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-update";
import { response } from "../interfaces/status-code";

export function updateUserController(updateUser: UpdateUserMethods, readUser: ReadUserMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id, body } = httpRequest;
        const fieldsMissing: string[] = [];
        const res = response();

        if(!id) return res.badRequest(`Missing param: id`);
        
        const user = {
            name: body.name,
            email: body.email,
            idCompany: body.idCompany
        };

        Object.keys(user).forEach((key) => {
            if(!user[key]) fieldsMissing.push(key);
        })

        if(fieldsMissing.length == Object.keys(user).length) 
            return res.badRequest(`Missing params: ${fieldsMissing}`);

        let userOrError

        try {
            userOrError = await readUser.run(id);
            if(!userOrError) return res.notFound("User not found");

        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }

        let newUserData

        try {
            newUserData = await updateUser.run(id, user, userOrError);
            if(!newUserData) return res.notFound("Update failed");
        } catch (error) {
            res.serverError(`Internal: ${error}`)
        }

        return res.ok();
    }

    return {
        handle
    }
}