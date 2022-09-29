"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>StaticBaseController
});
const _staticBaseService = _interopRequireDefault(require("../services/staticBase.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let StaticBaseController = class StaticBaseController {
    constructor(Model){
        this.getAll = async (req, res, next)=>{
            try {
                const allUsers = await this.service.findAll();
                next({
                    data: allUsers,
                    message: `Get all list`
                });
            } catch (err) {
                next(err);
            }
        };
        this.service = new _staticBaseService.default(Model);
    }
};

//# sourceMappingURL=staticBase.controller.js.map