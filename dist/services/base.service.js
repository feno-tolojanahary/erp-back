"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>BaseService
});
let BaseService = class BaseService {
    create(data) {
        const createdData = this.Model.create(data);
        return createdData;
    }
    async findAll() {
        const allData = await this.Model.findAll();
        return allData;
    }
    async findByCompany(companyId) {
        const allData = await this.Model.findAll({
            where: {
                companyId
            }
        });
        return allData;
    }
    async update(data, id) {
        await this.Model.update(data, {
            where: {
                id
            }
        });
        const updatedData = this.Model.findByPk(id);
        return updatedData;
    }
    delete(id) {
        const destroyedResult = this.Model.destroy({
            where: {
                id
            }
        });
        return destroyedResult;
    }
    constructor(model){
        this.Model = model;
    }
};

//# sourceMappingURL=base.service.js.map