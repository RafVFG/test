import { Router, Request, Response } from "express";
import { makeUpdateProduct } from "../../adapters/factories/update-product";

async function route(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const httpRequest = {
        id,
        body: req.body
    }
    
    const controller = makeUpdateProduct();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
router.put("/update-product/:id", route)
}
