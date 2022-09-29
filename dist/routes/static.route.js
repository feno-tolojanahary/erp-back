"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _staticBaseController = _interopRequireDefault(require("../controllers/staticBase.controller"));
const _addressTypeModel = _interopRequireDefault(require("../models/static/addressType.model"));
const _countryModel = _interopRequireDefault(require("../models/static/country.model"));
const _tagModel = _interopRequireDefault(require("../models/static/tag.model"));
const _userTitle = _interopRequireDefault(require("../models/users/userTitle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let StaticRoutes = class StaticRoutes {
    staticRoutes() {
        this.app.get('/countries', new _staticBaseController.default(_countryModel.default).getAll);
        this.app.get('/userTitles', new _staticBaseController.default(_userTitle.default).getAll);
        this.app.get('/tags', new _staticBaseController.default(_tagModel.default).getAll);
        this.app.get('/addressTypes', new _staticBaseController.default(_addressTypeModel.default).getAll);
    }
    constructor(app){
        this.app = app;
        this.staticRoutes();
    }
};
const _default = StaticRoutes;

//# sourceMappingURL=static.route.js.map