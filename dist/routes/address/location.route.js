"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_controller_1 = __importDefault(require("../../controllers/address/location.controller"));
const base_route_1 = __importDefault(require("../base.route"));
class LocationRoutes extends base_route_1.default {
    constructor() {
        super(location_controller_1.default);
    }
    initializeRoutes() { }
}
LocationRoutes.path = "location";
exports.default = LocationRoutes;
