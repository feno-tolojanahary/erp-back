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
const company_model_1 = __importDefault(require("../models/company.model"));
const base_service_1 = __importDefault(require("./base.service"));
class CompanyService extends base_service_1.default {
    constructor() {
        super(company_model_1.default);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("service data: ", data);
            return this.Model.create(data, {}, {
                include: [company_model_1.default.Address]
            });
        });
    }
}
exports.default = CompanyService;
