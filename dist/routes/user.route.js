"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('router');
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const base_route_1 = __importDefault(require("./base.route"));
class UserRoutes extends base_route_1.default {
    constructor() {
        super(user_controller_1.default);
    }
    initializeRoutes() { }
}
UserRoutes.path = "users";
exports.default = UserRoutes;
