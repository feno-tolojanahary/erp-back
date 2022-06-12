const Router = require('router');
import UserController from '@controllers/user.controller';
import { bodyNotEmpty, checkParamId } from '@middlewares/checkReqUtil.middleware';

class UserRoutes {
    public static path = "users";
    
    public router = Router();
    
    private userController = new UserController();
    
    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.userController.getAll);
        this.router.post('/', bodyNotEmpty, this.userController.create);
        this.router.put('/:id', bodyNotEmpty, this.userController.update);
        this.router.delete('/:id', this.userController.destroy);
    }
}

export default UserRoutes;