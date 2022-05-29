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
        this.router.get('/', this.userController.getUsers);
        this.router.post('/', bodyNotEmpty, this.userController.createUser);
        this.router.put('/:id', bodyNotEmpty, this.userController.updateUser);
        this.router.delete('/:id', this.userController.destroyUser);
    }
}

export default UserRoutes;