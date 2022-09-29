"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _checkReqUtilMiddleware = require("../middlewares/checkReqUtil.middleware");
const Router = require('router');
let BaseRoutes = class BaseRoutes {
    initializeDefaultRoutes() {
        this.router.get('/', this.controller.getAll);
        this.router.get('/:companyId', this.controller.getByCompany);
        this.router.post('/', _checkReqUtilMiddleware.bodyNotEmpty, this.controller.create);
        this.router.put('/:id', _checkReqUtilMiddleware.bodyNotEmpty, this.controller.update);
        this.router.delete('/:id', this.controller.destroy);
    }
    constructor(ControllerClass){
        this.router = Router();
        this.controller = new ControllerClass();
        this.initializeDefaultRoutes();
        this.initializeRoutes();
    }
};
const _default = BaseRoutes;

//# sourceMappingURL=base.route.js.map