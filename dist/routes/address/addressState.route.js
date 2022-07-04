"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressState_controller_1 = __importDefault(require("../../controllers/address/addressState.controller"));
const base_route_1 = __importDefault(require("../base.route"));
class AddressStateRoutes extends base_route_1.default {
    constructor() {
        super(addressState_controller_1.default);
    }
    initializeRoutes() { }
}
AddressStateRoutes.path = "address-states";
exports.default = AddressStateRoutes;
