"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>App
});
const _express = _interopRequireDefault(require("express"));
const _index = _interopRequireDefault(require("./routes/index"));
const _responseMiddleware = require("./middlewares/response.middleware");
const _path = _interopRequireDefault(require("path"));
const _cors = _interopRequireDefault(require("cors"));
const _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let App = class App {
    initializeMiddlewares() {
        this.app.use(_bodyParser.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
        this.app.use((0, _cors.default)());
    }
    initializeRoutes() {
        new _index.default(this.app);
        this.app.use('/static', _express.default.static(_path.default.join(__dirname, '../src/static')));
    }
    initializeResponseHandler() {
        this.app.use(_responseMiddleware.responseHandler);
    }
    listen(port) {
        this.app.listen(port, ()=>{
            console.log(`[server]: Server is running at https://localhost:${port}`);
        });
    }
    constructor(){
        this.app = (0, _express.default)();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeResponseHandler();
    }
};

//# sourceMappingURL=app.js.map