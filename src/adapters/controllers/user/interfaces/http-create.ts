import { User } from "../../../../use-cases/create-user/interfaces/user";

export interface HttpRequest {
    body: User
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}