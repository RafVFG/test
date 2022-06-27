import { userRepository } from "../../repositories/user";
import { createUser } from "../../use-cases/create-user";
import { SendingEmail } from "../../use-cases/sending_email";
import { createUserControler } from "../controllers/user/create";

export function makeCreateUser() {
    const repository = userRepository();
    const useCase = createUser(repository);
    const UseCaseEmail = SendingEmail();
    const controller = createUserControler(useCase, UseCaseEmail);

    return controller;
}