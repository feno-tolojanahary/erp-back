"use strict";
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
}
exports.default = CompanyService;
