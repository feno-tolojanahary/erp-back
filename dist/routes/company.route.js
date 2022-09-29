"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _companyController = _interopRequireDefault(require("../controllers/company.controller"));
const _baseRoute = _interopRequireDefault(require("./base.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CompanyRoutes = class CompanyRoutes extends _baseRoute.default {
    initializeRoutes() {}
    constructor(){
        super(_companyController.default);
    }
};
CompanyRoutes.path = "companies";
const _default = CompanyRoutes;

//# sourceMappingURL=company.route.js.map