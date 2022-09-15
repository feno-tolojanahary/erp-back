"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const pgUser = process.env.PG_USER;
const pgPwd = process.env.PG_PASSWORD;
const pgDbName = process.env.PG_DB_NAME;
const pgHost = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;
const sequelize = new sequelize_1.Sequelize(`postgres://${pgUser}:${pgPwd}@${pgHost}:${pgPort}/${pgDbName}`);
console.log("Models is executed");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Successfuly connecting to database");
        // await sequelize.sync({ alter: true })
    }
    catch (err) {
        console.error("Unable connecting to DB: ", err);
    }
}))();
exports.default = sequelize;
