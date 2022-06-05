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
const base_service_1 = __importDefault(require("./base.service"));
class UserService extends base_service_1.default {
    constructor() {
        super(new user_model_1.default());
    }
    create(userData) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = yield this.model.findOne({ where: { [sequelize_1.Op.or]: [{ email: userData.email }, { name: userData.name }] } });
            if (findUser) {
                throw new HttpException_1.HttpException(400, "User already exists");
            }
            return _super.create.call(this, userData);
        });
    }
}
exports.default = UserService;
