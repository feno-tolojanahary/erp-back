"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _companyService = _interopRequireDefault(require("../services/company.service"));
const _baseController = _interopRequireDefault(require("./base.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CompanyController = class CompanyController extends _baseController.default {
    constructor(){
        super(_companyService.default);
    }
};
const _default = CompanyController;

//# sourceMappingURL=company.controller.js.map