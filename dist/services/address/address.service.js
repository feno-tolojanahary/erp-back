"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = __importDefault(require("../base.service"));
const address_model_1 = __importDefault(require("../../models/address/address.model"));
class AddressService extends base_service_1.default {
    constructor() {
        super(address_model_1.default);
    }
}
exports.default = AddressService;
