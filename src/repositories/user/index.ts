import { User } from "../../entities/user/interfaces/user";
import { connection } from "../../main/config/connection-mysql";
import { UserRepositoryMethods } from "./interface/methods";

export function userRepository(): UserRepositoryMethods {
    const database = connection();

    async function create(data: User): Promise<void> {
        const user = {
            name: data.name,
            email: data.email,
            dtCreate: data.dtCreate,
            idCompany: data.idCompany
        };

        const { insertId } = await database.execute(
            `insert into user (
                name,
                email,
                dtCreate,
                idCompany)
            valuesn(
                '${user.name}',
                '${user.email}',
                '${user.dtCreate}',
                '${user.idCompany}',
            )`
        )
    }
}