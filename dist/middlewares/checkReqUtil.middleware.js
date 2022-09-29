"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    checkParamId: ()=>checkParamId,
    bodyNotEmpty: ()=>bodyNotEmpty
});
const _httpException = require("../exceptions/HttpException");
const _errorMiddleware = require("./error.middleware");
const checkParamId = (req, res, next)=>{
    if (!req.params.id) {
        (0, _errorMiddleware.errorHandler)(new _httpException.HttpException(400, "no param 'id' provided"), req, res, next);
    } else {
        next();
    }
};
const bodyNotEmpty = (req, res, next)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        (0, _errorMiddleware.errorHandler)(new _httpException.HttpException(400, "No body provided"), req, res, next);
    } else {
        next();
    }
};

//# sourceMappingURL=checkReqUtil.middleware.js.map