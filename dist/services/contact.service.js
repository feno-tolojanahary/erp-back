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
const sequelize_1 = require("sequelize");
const base_service_1 = __importDefault(require("./base.service"));
const index_1 = require("../models/index");
class ContactService extends base_service_1.default {
    constructor() {
        super(index_1.Contact);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("received data: ", data);
            const findContact = yield this.Model.findOne({ where: { [sequelize_1.Op.or]: [{ email: data.email }, { name: data.name }] } });
            if (findContact) {
                throw new HttpException_1.HttpException(400, "Contact already exists");
            }
            const createdContact = yield this.Model.create(data, {
                include: ["companies"]
            });
            return createdContact;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Model.findAll({
                where: {
                    createdBy: 1
                },
                include: [index_1.Contact.Company, index_1.Contact.Address]
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Model.findOne({
                where: { id },
                include: [index_1.Contact.Company, index_1.Contact.Address]
            });
        });
    }
}
exports.default = ContactService;
