"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_route_1 = __importDefault(require("./address/address.route"));
const addressState_route_1 = __importDefault(require("./address/addressState.route"));
const company_route_1 = __importDefault(require("./company.route"));
const user_route_1 = __importDefault(require("./user.route"));
const ROUTES_CLASS = [
    user_route_1.default,
    address_route_1.default,
    addressState_route_1.default,
    company_route_1.default
];
class Route {
    constructor(app) {
        ROUTES_CLASS.forEach(Routes => {
            app.use(`/${Routes.path}`, new Routes().router);
        });
    }
}
exports.default = Route;
