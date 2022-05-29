"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const response_middleware_1 = require("./middlewares/response.middleware");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeResponseHandler();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes() {
        new index_1.default(this.app);
    }
    initializeResponseHandler() {
        this.app.use(response_middleware_1.responseHandler);
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`[server]: Server is running at https://localhost:${port}`);
        });
    }
}
exports.default = App;
