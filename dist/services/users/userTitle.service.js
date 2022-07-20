"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userTitle_1 = __importDefault(require("../../models/users/userTitle"));
const base_service_1 = __importDefault(require("../base.service"));
class UserTitleService extends base_service_1.default {
    constructor() {
        super(userTitle_1.default);
    }
}
exports.default = UserTitleService;
