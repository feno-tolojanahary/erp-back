"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressState_model_1 = __importDefault(require("../../models/address/addressState.model"));
const base_service_1 = __importDefault(require("../base.service"));
class AddressStateService extends base_service_1.default {
    constructor() {
        super(addressState_model_1.default);
    }
}
exports.default = AddressStateService;
