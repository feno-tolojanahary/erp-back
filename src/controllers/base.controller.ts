import { NextFunction, Request, Response } from "express";
import { DataResponse } from '@interfaces/index.interface';

export default abstract class BaseController {
    
    protected service: any;

    constructor(Service: any) {
        this.service = new Service();
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByCompany = this.getByCompany.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const allUsers = await this.service.findAll();
            next({ data: allUsers, message: `Get all list` } as DataResponse);
        } catch (err) {
            next(err)
        }
    }

    public async getByCompany(req: Request, res: Response, next: NextFunction) {
        try {
            const allUsers = await this.service.findByCompany(req.params.companyId);
            next({ data: allUsers, message: `Get all list` } as DataResponse);
        } catch (err) {
            next(err)
        }
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const createdData = await this.service.create(data);
            next({ data: createdData, message: "Data created" } as DataResponse);
        } catch(err) {
            next(err)
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = parseInt(req.params.id);
            const data = req.body;
            const result = await this.service.update(data, id);
            next({ data: result, message: "Updated data" });
        } catch(err) {
            next(err);
        }
    }

    public async destroy(req: Request, res: Response, next: NextFunction) {
        try {
            const id: number = parseInt(req.params.id);
            const result = await this.service.delete(id);
            next({data: result, message: "Deleted data"});
        } catch(err) {
            next(err);
        }
    }
}