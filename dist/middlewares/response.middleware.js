"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = void 0;
const error_middleware_1 = require("./error.middleware");
const success_middleware_1 = require("./success.middleware");
const responseHandler = (dataRes, req, res, next) => {
    if (dataRes instanceof Error) {
        (0, error_middleware_1.errorHandler)(dataRes, req, res, next);
    }
    else {
        (0, success_middleware_1.successResponse)(dataRes, req, res, next);
    }
};
exports.responseHandler = responseHandler;
