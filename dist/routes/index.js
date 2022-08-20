"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_route_1 = __importDefault(require("./address/address.route"));
const addressState_route_1 = __importDefault(require("./address/addressState.route"));
const company_route_1 = __importDefault(require("./company.route"));
const static_route_1 = __importDefault(require("./static.route"));
const ROUTES_CLASS = [
    address_route_1.default,
    addressState_route_1.default,
    company_route_1.default
];
class Route {
    constructor(app) {
        this.app = app;
        this.routesApp();
        this.staticRoutes();
    }
    routesApp() {
        ROUTES_CLASS.forEach(Routes => {
            this.app.use(`/${Routes.path}`, new Routes().router);
        });
    }
    staticRoutes() {
        new static_route_1.default(this.app);
    }
}
exports.default = Route;
