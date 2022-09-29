"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _baseController = _interopRequireDefault(require("../base.controller"));
const _addressService = _interopRequireDefault(require("../../services/address/address.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressController = class AddressController extends _baseController.default {
    constructor(){
        super(_addressService.default);
    }
};
const _default = AddressController;

//# sourceMappingURL=address.controller.js.map