import { NextFunction, Request, Response } from "express";
import { DataResponse } from '@interfaces/index.interface';

export default abstract class BaseController {
    
    protected service: any;

    constructor(Service: any) {
        this.service = new Service();
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const allUsers = await this.service.findAll();
            next({ data: allUsers, message: `Get all list` } as DataResponse);
        } catch (err) {
            next(err)
        }
    }

    public getByCompany = async (req: Request,                                                                      es: Response, next: NextFunction) => {
        try {
            const allUsers = await this.service.findByCompany(req.params.companyId);
            next({ data: allUsers, message: `Get all list` } as DataResponse);
        } catch (err) {
            next(err)
        }
    }

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("calling create base: ", req.body)
            const data = req.body;
            const createdData = await this.service.create(data);
            next({ data: createdData, message: "Data created" } as DataResponse);
        } catch(err) {
            next(err)
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const data = req.body;
            const result = await this.service.update(data, id);
            next({ data: result, message: "Updated data" });
        } catch(err) {
            next(err);
        }
    }

    public destroy = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.id);
            const result = await this.service.delete(id);
            next({data: result, message: "Deleted data"});
        } catch(err) {
            next(err);
        }
    }
}