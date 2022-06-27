import { UserRepositoryMethods } from "../../repositories/user/interfaces/methods";
import { ReadUserMethods } from "./interfaces/methods";
import { User } from "./interfaces/user";

export function readUser(userRepository: UserRepositoryMethods): ReadUserMethods {
    async function run(id: number): Promise<User | null> {
        const userExists  = await userRepository.read(id);
        if(!userExists) return null;
        
        return userExists;
    }

    return {
        run
    }
}