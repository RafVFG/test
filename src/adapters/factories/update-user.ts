import { userRepository } from "../../repositories/user";
import { readUser } from "../../use-cases/read-user";
import { updateUser } from "../../use-cases/update-user";
import { updateUserController } from "../controllers/user/update";

export function makeUpdateUser() {
    const repository = userRepository();
    const useCaseUpdate = updateUser(repository);
    const useCaseRead = readUser(repository)
    const controller = updateUserController(useCaseUpdate, useCaseRead);

    return controller;
}