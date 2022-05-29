import { HttpException } from "@exceptions/HttpException";
import { NextFunction, Request, Response } from "express"
import { DataResponse } from "../interfaces/index.interface"
import { errorHandler } from "./error.middleware"
import { successResponse } from "./success.middleware";

export const responseHandler = (dataRes: DataResponse | Error, req: Request, res: Response, next: NextFunction ) => {
    if (dataRes instanceof Error) {
        errorHandler(dataRes as HttpException, req, res, next);
    } else {
        successResponse(dataRes, req, res, next);
    }
}