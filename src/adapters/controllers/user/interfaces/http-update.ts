import { User } from "../../../../use-cases/update-user/interfaces/user";

export interface HttpRequest {
    id: number,
    body: User
}

export interface HttpResponse {
    statusCode: number,
    body?: any
}