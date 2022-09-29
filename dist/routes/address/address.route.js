"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _addressController = _interopRequireDefault(require("../../controllers/address/address.controller"));
const _baseRoute = _interopRequireDefault(require("../base.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressRoutes = class AddressRoutes extends _baseRoute.default {
    initializeRoutes() {}
    constructor(){
        super(_addressController.default);
    }
};
AddressRoutes.path = "address";
const _default = AddressRoutes;

//# sourceMappingURL=address.route.js.map