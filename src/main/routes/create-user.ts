import { Router, Request, Response } from "express";
import { makeCreateUser } from "../../adapters/factories/create-user"

async function route(req: Request, res: Response): Promise<void> {
    const httpRequest = {
        body: req.body
    }
        
    const controller = makeCreateUser();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.post("/create-user", route)
}
