"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor(app) {
        new index_1.default(app);
        this.initializeMiddlewares(app);
    }
    initializeMiddlewares(app) {
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
    }
}
exports.default = Server;
