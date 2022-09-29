"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "responseHandler", {
    enumerable: true,
    get: ()=>responseHandler
});
const _errorMiddleware = require("./error.middleware");
const _successMiddleware = require("./success.middleware");
const responseHandler = (dataRes, req, res, next)=>{
    if (dataRes instanceof Error) {
        (0, _errorMiddleware.errorHandler)(dataRes, req, res, next);
    } else {
        (0, _successMiddleware.successResponse)(dataRes, req, res, next);
    }
};

//# sourceMappingURL=response.middleware.js.map