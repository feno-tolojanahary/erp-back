"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _baseService = _interopRequireDefault(require("../base.service"));
const _addressModel = _interopRequireDefault(require("../../models/address/address.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressService = class AddressService extends _baseService.default {
    constructor(){
        super(_addressModel.default);
    }
};
const _default = AddressService;

//# sourceMappingURL=address.service.js.map