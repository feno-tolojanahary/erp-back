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
const HttpException_1 = require("../exceptions/HttpException");
const user_model_1 = __importDefault(require("../models/user.model"));
const sequelize_1 = require("sequelize");
class UserService {
    constructor() {
        this.user = user_model_1.default;
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = yield this.user.findOne({ where: { [sequelize_1.Op.or]: [{ email: userData.email }, { name: userData.name }] } });
            if (findUser) {
                throw new HttpException_1.HttpException(400, "User already exists");
            }
            const createdUser = this.user.create(userData);
            return createdUser;
        });
    }
    findAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.user.findAll();
            return allUsers;
        });
    }
    updateUser(userData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.user.update(userData, { where: { id } });
            const updatedData = this.user.findByPk(id);
            return updatedData;
        });
    }
    deleteUser(id) {
        const destroyedResult = this.user.destroy({ where: { id } });
        return destroyedResult;
    }
}
exports.default = UserService;
