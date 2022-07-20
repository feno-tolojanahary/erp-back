"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staticBase_controller_1 = __importDefault(require("../controllers/staticBase.controller"));
const addressType_model_1 = __importDefault(require("../models/static/addressType.model"));
const country_model_1 = __importDefault(require("../models/static/country.model"));
const tag_model_1 = __importDefault(require("../models/static/tag.model"));
const userTitle_1 = __importDefault(require("../models/users/userTitle"));
class StaticRoutes {
    constructor(app) {
        this.app = app;
        this.staticRoutes();
    }
    staticRoutes() {
        this.app.get('/countries', new staticBase_controller_1.default(country_model_1.default).getAll);
        this.app.get('/userTitles', new staticBase_controller_1.default(userTitle_1.default).getAll);
        this.app.get('/tags', new staticBase_controller_1.default(tag_model_1.default).getAll);
        this.app.get('/addressTypes', new staticBase_controller_1.default(addressType_model_1.default).getAll);
    }
}
exports.default = StaticRoutes;
