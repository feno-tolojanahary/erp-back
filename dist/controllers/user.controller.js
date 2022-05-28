"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.userService.findAllUser();
            res.status(200).json({ data: allUsers, message: "Users list" });
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const createdUserData = yield this.userService.createUser(userData);
            res.status(200).json({ data: createdUserData, message: "User created" });
        });
    }
}
exports.default = UserController;
