"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('router');
const contact_controller_1 = __importDefault(require("../controllers/contact.controller"));
const base_route_1 = __importDefault(require("./base.route"));
class ContactRoutes extends base_route_1.default {
    constructor() {
        super(contact_controller_1.default);
    }
    initializeRoutes() { }
}
ContactRoutes.path = "contacts";
exports.default = ContactRoutes;
