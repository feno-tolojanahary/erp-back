"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('router');
const checkReqUtil_middleware_1 = require("../middlewares/checkReqUtil.middleware");
class BaseRoutes {
    constructor(ControllerClass) {
        this.router = Router();
        this.controller = new ControllerClass();
        this.initializeDefaultRoutes();
    }
    initializeDefaultRoutes() {
        this.router.get('/', this.controller.getAll);
        this.router.get('/:companyId', this.controller.getByCompany);
        this.router.post('/', checkReqUtil_middleware_1.bodyNotEmpty, this.controller.create);
        this.router.put('/:id', checkReqUtil_middleware_1.bodyNotEmpty, this.controller.update);
        this.router.delete('/:id', this.controller.destroy);
    }
}
exports.default = BaseRoutes;
