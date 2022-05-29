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
const user_dto_1 = require("../dtos/user.dto");
const class_validator_1 = require("class-validator");
const HttpException_1 = require("../exceptions/HttpException");
class UserController {
    constructor() {
        this.userService = new user_service_1.default;
        this.getUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.userService.findAllUser();
                next({ data: allUsers, message: "Users list" });
            }
            catch (err) {
                next(err);
            }
        });
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                const validationErros = yield (0, class_validator_1.validate)(new user_dto_1.CreateUserDto(userData), { validationError: { target: false } });
                if (validationErros.length > 0) {
                    throw new HttpException_1.HttpException(500, JSON.stringify(validationErros));
                }
                const createdUserData = yield this.userService.createUser(userData);
                next({ data: createdUserData, message: "User created" });
            }
            catch (err) {
                next(err);
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const userData = req.body;
                const result = yield this.userService.updateUser(userData, id);
                next({ data: result, message: "Updated user" });
            }
            catch (err) {
                next(err);
            }
        });
        this.destroyUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield this.userService.deleteUser(id);
                next({ data: result, message: "Deleted user" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = UserController;
