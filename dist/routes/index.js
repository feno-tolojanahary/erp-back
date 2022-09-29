"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>Route
});
const _addressRoute = _interopRequireDefault(require("./address/address.route"));
const _addressStateRoute = _interopRequireDefault(require("./address/addressState.route"));
const _companyRoute = _interopRequireDefault(require("./company.route"));
const _staticRoute = _interopRequireDefault(require("./static.route"));
const _contactRoute = _interopRequireDefault(require("./contact.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ROUTES_CLASS = [
    _addressRoute.default,
    _addressStateRoute.default,
    _companyRoute.default,
    _contactRoute.default
];
let Route = class Route {
    routesApp() {
        ROUTES_CLASS.forEach((Routes)=>{
            this.app.use(`/${Routes.path}`, new Routes().router);
        });
    }
    staticRoutes() {
        new _staticRoute.default(this.app);
    }
    constructor(app){
        this.app = app;
        this.routesApp();
        this.staticRoutes();
    }
};

//# sourceMappingURL=index.js.map