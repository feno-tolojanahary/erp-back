"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_controller_1 = __importDefault(require("../controllers/company.controller"));
const base_route_1 = __importDefault(require("./base.route"));
class CompanyRoutes extends base_route_1.default {
    constructor() {
        super(company_controller_1.default);
    }
    initializeRoutes() { }
}
CompanyRoutes.path = "companies";
exports.default = CompanyRoutes;
