import { UserRepositoryMethods } from "../../repositories/user/interfaces/methods";
import { DeleteUserMethods } from "./interfaces/methods";

export function deleteUser(userRepository: UserRepositoryMethods): DeleteUserMethods {
    async function run(id: number): Promise<number | null> {
        await userRepository.del(id);

        return id;
    }

    return {
        run
    }
}