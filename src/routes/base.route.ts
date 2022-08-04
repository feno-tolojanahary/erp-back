const Router = require('router');
import { bodyNotEmpty, checkParamId } from '@middlewares/checkReqUtil.middleware';

abstract class BaseRoutes {
    public router = Router();
    
    protected controller;
    
    constructor(ControllerClass: any) {
        this.controller = new ControllerClass();
        this.initializeDefaultRoutes();
    }

    initializeDefaultRoutes() {
        this.router.get('/', this.controller.getAll);
        this.router.get('/:companyId', this.controller.getByCompany);
        this.router.post('/', bodyNotEmpty, this.controller.create);
        this.router.put('/:id', bodyNotEmpty, this.controller.update);
        this.router.delete('/:id', this.controller.destroy);
    }

    abstract initializeRoutes(): void;
}

export default BaseRoutes;