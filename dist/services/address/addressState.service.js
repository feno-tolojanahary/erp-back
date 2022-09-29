"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _addressStateModel = _interopRequireDefault(require("../../models/address/addressState.model"));
const _baseService = _interopRequireDefault(require("../base.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressStateService = class AddressStateService extends _baseService.default {
    constructor(){
        super(_addressStateModel.default);
    }
};
const _default = AddressStateService;

//# sourceMappingURL=addressState.service.js.map