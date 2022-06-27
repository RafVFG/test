import { User } from "./user";

export interface CreateUserMethods {
    run: (user: User) => Promise<number | null> 
}