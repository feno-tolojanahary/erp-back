"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _dotenv = _interopRequireDefault(require("dotenv"));
const _sequelize = require("sequelize");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dotenv.default.config();
const pgUser = process.env.PG_USER;
const pgPwd = process.env.PG_PASSWORD;
const pgDbName = process.env.PG_DB_NAME;
const pgHost = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;
const sequelize = new _sequelize.Sequelize(`postgres://${pgUser}:${pgPwd}@${pgHost}:${pgPort}/${pgDbName}`);
console.log("Models is executed");
(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Successfuly connecting to database");
    } catch (err) {
        console.error("Unable connecting to DB: ", err);
    }
})();
const _default = sequelize;

//# sourceMappingURL=sequelize.js.map