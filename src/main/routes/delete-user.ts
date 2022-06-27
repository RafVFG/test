import { Router, Request, Response } from "express";
import { makeDeleteUser } from "../../adapters/factories/delete-user"

async function route(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    
    const httpRequest = {
        id
    }
        
    const controller = makeDeleteUser();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.put("/delete-user/:id", route)
}
