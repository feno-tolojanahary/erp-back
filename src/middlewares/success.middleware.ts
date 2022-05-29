import { NextFunction, Request, Response } from "express";
import { DataResponse } from "@interfaces/index.interface";

export const successResponse = (dataRes: DataResponse, req: Request, res: Response, next: NextFunction) => {
    try {
        const { data, message } = dataRes;
        const status: number = 200;
        res.status(status).json({ data, message });
    } catch(err) {
        next(err);
    }
}