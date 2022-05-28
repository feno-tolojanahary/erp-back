const Router = require('router');
import UserController from '../controllers/user.controller';

class UserRoutes {
    router = Router();
    userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/')
            .get(this.userController.getUsers)
            .post(this.userController.createUser);
    }
}

export default new UserRoutes().router;