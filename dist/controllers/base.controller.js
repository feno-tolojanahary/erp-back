"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>BaseController
});
let BaseController = class BaseController {
    async getAll(req, res, next) {
        try {
            const allUsers = await this.service.findAll();
            next({
                data: allUsers,
                message: `Get all list`
            });
        } catch (err) {
            next(err);
        }
    }
    async getByCompany(req, res, next) {
        try {
            const allUsers = await this.service.findByCompany(req.params.companyId);
            next({
                data: allUsers,
                message: `Get all list`
            });
        } catch (err) {
            next(err);
        }
    }
    async create(req, res, next) {
        try {
            const data = req.body;
            const createdData = await this.service.create(data);
            next({
                data: createdData,
                message: "Data created"
            });
        } catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;
            const result = await this.service.update(data, id);
            next({
                data: result,
                message: "Updated data"
            });
        } catch (err) {
            next(err);
        }
    }
    async destroy(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const result = await this.service.delete(id);
            next({
                data: result,
                message: "Deleted data"
            });
        } catch (err) {
            next(err);
        }
    }
    constructor(Service){
        this.service = new Service();
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getByCompany = this.getByCompany.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }
};

//# sourceMappingURL=base.controller.js.map