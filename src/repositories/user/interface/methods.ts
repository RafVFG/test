import { User } from "../../../entities/user/interfaces/user";

export interface UserRepositoryMethods {
    create: (data: User) => Promise<void>
}