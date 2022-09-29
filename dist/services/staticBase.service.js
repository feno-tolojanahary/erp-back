"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>StaticBaseService
});
let StaticBaseService = class StaticBaseService {
    async findAll() {
        const allData = await this.Model.findAll();
        return allData;
    }
    constructor(model){
        this.Model = model;
    }
};

//# sourceMappingURL=staticBase.service.js.map