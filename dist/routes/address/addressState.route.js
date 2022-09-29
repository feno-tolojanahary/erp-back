"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _addressStateController = _interopRequireDefault(require("../../controllers/address/addressState.controller"));
const _baseRoute = _interopRequireDefault(require("../base.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressStateRoutes = class AddressStateRoutes extends _baseRoute.default {
    initializeRoutes() {}
    constructor(){
        super(_addressStateController.default);
    }
};
AddressStateRoutes.path = "address-states";
const _default = AddressStateRoutes;

//# sourceMappingURL=addressState.route.js.map