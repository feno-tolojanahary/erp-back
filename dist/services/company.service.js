"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _index = require("../models/index");
const _baseService = _interopRequireDefault(require("./base.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CompanyService = class CompanyService extends _baseService.default {
    create(data) {
        return new Promise((resolve, reject)=>{
            (async ()=>{
                try {
                    const createdCompany = await this.Model.create(data, {
                        include: [
                            _index.Company.Address
                        ]
                    });
                    resolve(createdCompany);
                } catch (err) {
                    console.log("Error when creating company: ", err);
                    reject(err);
                }
            })();
        });
    }
    constructor(){
        super(_index.Company);
    }
};
const _default = CompanyService;

//# sourceMappingURL=company.service.js.map