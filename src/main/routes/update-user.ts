import { Router, Request, Response } from "express";
import { makeUpdateUser } from "../../adapters/factories/update-user";

async function route(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const httpRequest = {
        id,
        body: req.body
    }
    
    const controller = makeUpdateUser();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
router.put("/update-user/:id", route)
}
