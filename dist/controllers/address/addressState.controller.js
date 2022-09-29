"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _baseController = _interopRequireDefault(require("../base.controller"));
const _addressStateService = _interopRequireDefault(require("../../services/address/addressState.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressStateController = class AddressStateController extends _baseController.default {
    constructor(){
        super(_addressStateService.default);
    }
};
const _default = AddressStateController;

//# sourceMappingURL=addressState.controller.js.map