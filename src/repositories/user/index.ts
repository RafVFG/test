import { connection } from "../../main/config/connection-mysql";
import { UserRepositoryMethods } from "./interfaces/methods";
import { User as UserOfCreate } from "../../use-cases/create-user/interfaces/user";
import { User as UserOfRead } from "../../use-cases/read-user/interfaces/user";

export function userRepository(): UserRepositoryMethods {
    const database = connection();

    async function create(user: UserOfCreate): Promise<number> {
        const { insertId } = await database.execute(
            `insert into user (
                name,
                email,
                idCompany)
            values(
                '${user.name}',
                '${user.email}',
                ${user.idCompany}
            )`
        )
        
        return insertId
    }

    async function isExistsWithEmail(email: string): Promise<boolean> {
        const [result] = await database.execute(
            ` select
                *
            from user
            where email like '${email}' and del = 0;`
        )
        
        if(result) return true;
        
        return false;
    }

    async function isExistsWithName(name: string, idCompany: number): Promise<boolean> {
        const [result] = await database.execute(
            ` select 
                * 
            from user 
            where name like '${name}' and idCompany <> '${idCompany}' and del = 0;`
        )

        if(result) return true;
        
        return false;
    }

    async function read(id: number): Promise<UserOfRead | null> {
        const [result] = await database.execute(
            ` select 
                * 
            from user 
            where id like '${id}' and del = 0;`
        )

        if(!result) return null;
        
        return result;
    }

    async function update(id: number, user: string[]): Promise<void> {
        return database.execute(
            ` update ignore user
            set ${user}
            where id = ${id};` 
        )
    }

    async function del(id: number): Promise<void> {
        return database.execute(
            ` update user
            set del = 1
            where id = ${id};`
        )
    }
    
    return {
        create,
        isExistsWithEmail,
        isExistsWithName,
        read,
        update,
        del
    }
}