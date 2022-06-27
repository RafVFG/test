import { Router, Request, Response } from "express";
import { makeDeleteProduct } from "../../adapters/factories/delete-product"

async function route(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    
    const httpRequest = {
        id
    }
        
    const controller = makeDeleteProduct();
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export default (router: Router): void => {
    router.put("/delete-product/:id", route)
}
