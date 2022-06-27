import { CreateUserMethods } from "./interfaces/methods";
import { UserRepositoryMethods } from "../../repositories/user/interfaces/methods";
import { User } from "./interfaces/user";
import { userEntity } from "../../entities/user";

export function createUser(userRepository: UserRepositoryMethods): CreateUserMethods {
    async function run(user: User): Promise<number | null> {
        const userOrError = userEntity(user);
        if(!userOrError) return null;

        const data = userOrError.getValue();

        const emailExists  = await userRepository.isExistsWithEmail(data.email);
        if(emailExists) return null;

        const nameExists  = await userRepository.isExistsWithName(data.name, data.idCompany);
        if(nameExists) return null;
        
        return await userRepository.create(data);
    }

    return {
        run
    }
}