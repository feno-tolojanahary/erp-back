import { NextFunction, Request, Response } from "express";
import { DataResponse } from '@interfaces/index.interface';
import StaticBaseService from "@services/staticBase.service";

export default class StaticBaseController {
    
    protected service: any;

    constructor(Model: any) {
        this.service = new StaticBaseService(Model);
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allUsers = await this.service.findAll();
            next({ data: allUsers, message: `Get all list` } as DataResponse);
        } catch (err) {
            next(err)
        }
    }
}