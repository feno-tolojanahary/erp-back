"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = __importDefault(require("../base.controller"));
const address_service_1 = __importDefault(require("../../services/address/address.service"));
class AddressController extends base_controller_1.default {
    constructor() {
        super(address_service_1.default);
    }
}
exports.default = AddressController;
