import { User } from "./user";

export interface ReadUserMethods {
    run: (id: number) => Promise<User | null>
}