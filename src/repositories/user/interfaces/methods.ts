import { User as UserOfCreate } from "../../../use-cases/create-user/interfaces/user";
import { User as UserOfRead } from "../../../use-cases/read-user/interfaces/user";

export interface UserRepositoryMethods {
    create: (user: UserOfCreate) => Promise<number>
    isExistsWithEmail: (email: string) => Promise<boolean>
    isExistsWithName: (name: string, idCompany: number) => Promise<boolean>
    read: (id: number) => Promise<UserOfRead | null>
    update: (id: number, user: string[]) => Promise<void>
    del: (id: number) => Promise<void>
}