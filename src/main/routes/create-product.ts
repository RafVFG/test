import { Router, Request, Response } from "express";
import { makeCreateProduct } from "../../adapters/factories/create-product"

async function route(req: Request, res: Response): Promise<void> {
    const httpRequest = {
        body: req.body
    }

    const controller = makeCreateProduct();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.post("/create-product", route)
}
