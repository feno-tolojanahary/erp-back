"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyNotEmpty = exports.checkParamId = void 0;
const HttpException_1 = require("../exceptions/HttpException");
const error_middleware_1 = require("./error.middleware");
const checkParamId = (req, res, next) => {
    if (!req.params.id) {
        (0, error_middleware_1.errorHandler)(new HttpException_1.HttpException(400, "no param 'id' provided"), req, res, next);
    }
    else {
        next();
    }
};
exports.checkParamId = checkParamId;
const bodyNotEmpty = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        (0, error_middleware_1.errorHandler)(new HttpException_1.HttpException(400, "No body provided"), req, res, next);
    }
    else {
        next();
    }
};
exports.bodyNotEmpty = bodyNotEmpty;
