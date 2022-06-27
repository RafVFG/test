import { Router, Request, Response } from "express";
import { makeReadProduct } from "../../adapters/factories/read-porduct";

async function route(req: Request, res: Response): Promise<void> {
    const httpRequest = {
        query: req.query
    }
    
    const controller = makeReadProduct();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.get("/read-product", route)
}