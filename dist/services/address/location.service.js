"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = __importDefault(require("../base.service"));
const location_model_1 = __importDefault(require("../../models/address/location.model"));
class LocationService extends base_service_1.default {
    constructor() {
        super(location_model_1.default);
    }
}
exports.default = LocationService;
