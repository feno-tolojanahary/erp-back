"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('router');
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const checkReqUtil_middleware_1 = require("../middlewares/checkReqUtil.middleware");
class UserRoutes {
    constructor() {
        this.router = Router();
        this.userController = new user_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.userController.getUsers);
        this.router.post('/', checkReqUtil_middleware_1.bodyNotEmpty, this.userController.createUser);
        this.router.put('/:id', checkReqUtil_middleware_1.bodyNotEmpty, this.userController.updateUser);
        this.router.delete('/:id', this.userController.destroyUser);
    }
}
UserRoutes.path = "users";
exports.default = UserRoutes;
