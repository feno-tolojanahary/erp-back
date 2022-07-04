"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_controller_1 = __importDefault(require("../../controllers/address/address.controller"));
const base_route_1 = __importDefault(require("../base.route"));
class AddressRoutes extends base_route_1.default {
    constructor() {
        super(address_controller_1.default);
    }
    initializeRoutes() { }
}
AddressRoutes.path = "address";
exports.default = AddressRoutes;
