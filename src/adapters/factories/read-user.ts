import { userRepository } from "../../repositories/user";
import { readUser } from "../../use-cases/read-user";
import { readUserController } from "../controllers/user/read";

export function makeReadUser() {
    const repository = userRepository();
    const useCase = readUser(repository);
    const controller = readUserController(useCase);

    return controller;
}