const Router = require('router');
import UserController from '@controllers/user.controller';
import BaseRoutes from './base.route';

class UserRoutes extends BaseRoutes {
    public static path = "users";

    constructor() {
        super(UserController);
    }

    initializeRoutes(): void {}
    
}

export default UserRoutes;