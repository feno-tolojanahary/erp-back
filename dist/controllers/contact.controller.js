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
const contact_service_1 = __importDefault(require("../services/contact.service"));
const contact_dto_1 = require("../dtos/contact.dto");
const class_validator_1 = require("class-validator");
const HttpException_1 = require("../exceptions/HttpException");
const base_controller_1 = __importDefault(require("./base.controller"));
class ContactController extends base_controller_1.default {
    constructor() {
        super(contact_service_1.default);
        this.service = new contact_service_1.default();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                console.log("received body: ", data);
                const validationErros = yield (0, class_validator_1.validate)(new contact_dto_1.CreateContactDto(data), { validationError: { target: false } });
                if (validationErros.length > 0) {
                    throw new HttpException_1.HttpException(500, JSON.stringify(validationErros));
                }
                // super.create(req, res, next);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = ContactController;
