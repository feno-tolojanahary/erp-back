import { HttpException } from "@exceptions/HttpException"
import { NextFunction, Request, Response } from "express"
import { errorHandler } from "./error.middleware"

export const checkParamId = (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.id) {
        errorHandler(
            new HttpException(400, "no param 'id' provided"),
            req,
            res,
            next
        ) 
    } else {
        next()
    }
}

export const bodyNotEmpty = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        errorHandler(
            new HttpException(400, "No body provided"),
            req,
            res,
            next
        ) 
    } else {
        next()
    }
}