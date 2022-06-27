import { UserRepositoryMethods } from "../../repositories/user/interfaces/methods";
import { UpdateUserMethods } from "./interfaces/methods";
import { User as UserOfUpdate } from "./interfaces/user";
import { User as UserOfRead } from "../read-user/interfaces/user";
import { userEntity } from "../../entities/user";

export function updateUser(userRepository: UserRepositoryMethods): UpdateUserMethods {
    async function run(id: number, user: UserOfUpdate, currentUser: UserOfRead): Promise<number | null> {
        const userOrError = userEntity(user);
        if(!userOrError) return null;

        const data = userOrError.getValue();

        if(data.email) {
            const emailExists  = await userRepository.isExistsWithEmail(data.email);
            if(emailExists) return null;
        }

        if(data.name || data.idCompany) {
            const nameExists  = await userRepository.isExistsWithName(data.name || currentUser.name, data.idCompany ||  currentUser.idCompany);
            if(nameExists) return null;

        }

        const newUser: string[] = [];
        Object.keys(user).forEach((key) => {
            if(user[key]) newUser.push(`${key} = '${user[key]}'`);
        })

        await userRepository.update(id, newUser);

        return id;
    }

    return {
        run
    }
}