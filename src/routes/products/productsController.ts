import { Request, Response } from "express";

export function listProducts(req: Request, res: Response)  {
    res.send('listProducts');
};

export function getProductById(req: Request, res: Response)  {
    res.send(' getProductById');
};

export function createProduct(req: Request, res: Response)  {
<<<<<<< HEAD

    console.log(req.body);
    
=======
>>>>>>> 54bbe2279e5135d06a42d35055b6f1f8eaa0e5f1
    res.send('createProduct');
};

export function updateProduct(req: Request, res: Response)  {
    res.send('updateProduct');
};

export function deleteProduct(req: Request, res: Response)  {
    res.send('deleteProduct');
};

