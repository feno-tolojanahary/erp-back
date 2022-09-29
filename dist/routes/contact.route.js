"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _contactController = _interopRequireDefault(require("../controllers/contact.controller"));
const _baseRoute = _interopRequireDefault(require("./base.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Router = require('router');
let ContactRoutes = class ContactRoutes extends _baseRoute.default {
    initializeRoutes() {
        this.router.get('/getById/:id', this.controller.findById);
    }
    constructor(){
        super(_contactController.default);
    }
};
ContactRoutes.path = "contacts";
const _default = ContactRoutes;

//# sourceMappingURL=contact.route.js.map