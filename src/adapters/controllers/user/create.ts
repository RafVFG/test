import { CreateUserMethods } from "../../../use-cases/create-user/interfaces/methods";
import { HttpRequest, HttpResponse } from "./interfaces/http-create";
import { response } from "../interfaces/status-code";
import { EmailMethods } from "../../../use-cases/sending_email/interfaces/methods";

export function createUserControler(createUser: CreateUserMethods, sendingEmail: EmailMethods) {
    async function handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { body } = httpRequest;
        const fieldsMissing: string[] = [];
        const res = response();
 
        const user = {
            name: body.name,
            email: body.email,
            idCompany: body.idCompany
        };

        Object.keys(user).forEach((key) => {
            if(!user[key]) fieldsMissing.push(key);
        })

        if(fieldsMissing.length > 0) return res.badRequest(`Missing params: ${fieldsMissing}`);
        
        let idOrError

        try {
            idOrError = await createUser.run(user);
        } catch (error) {
            res.serverError(`Internal: ${error}`);
        }

        if(!idOrError) return res.badRequest("Invalid email or user already exists");

        sendingEmail.run(user.email);

        return res.ok(idOrError);
    } 

    return {
        handle
    }
}