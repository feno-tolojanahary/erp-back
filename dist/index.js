"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _dotenv = _interopRequireDefault(require("dotenv"));
const _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const app = new _app.default();
app.listen(port);

//# sourceMappingURL=index.js.map