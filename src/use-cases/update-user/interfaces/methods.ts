import { User as UserOfUpdate } from "./user";
import { User as UserOfRead } from "../../read-user/interfaces/user";

export interface UpdateUserMethods {
    run: (id: number, user: UserOfUpdate, currentUser: UserOfRead) => Promise<number | null> 
}