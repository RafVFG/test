import { Router, Request, Response } from "express";
import { makeReadUser } from "../../adapters/factories/read-user";

async function route(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    
    const httpRequest = {
        id
    }
    
    const controller = makeReadUser();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.get("/read-user/:id", route)
}