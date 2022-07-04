"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_service_1 = __importDefault(require("../services/company.service"));
const base_controller_1 = __importDefault(require("./base.controller"));
class CompanyController extends base_controller_1.default {
    constructor() {
        super(company_service_1.default);
    }
}
exports.default = CompanyController;
