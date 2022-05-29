import { HttpException } from "@exceptions/HttpException";
import { NextFunction, Request, Response } from "express";


export const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        const status: number = error.status || 500;
        const message: string = error.message || "Something went wrong";

        console.log(`[${req.method}] ${req.path}: status: ${status} > `, message);
        res.status(status).json({ message });
    } catch(err) {
        next(err);
    }
}