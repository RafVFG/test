import { userRepository } from "../../repositories/user";
import { deleteUser } from "../../use-cases/delete-user";
import { deleteUserController } from "../controllers/user/delete";

export function makeDeleteUser() {
    const repository = userRepository();
    const useCase = deleteUser(repository);
    const controller = deleteUserController(useCase);

    return controller;
}