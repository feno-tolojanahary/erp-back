"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorHandler", {
    enumerable: true,
    get: ()=>errorHandler
});
const errorHandler = (error, req, res, next)=>{
    try {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        console.log(`[${req.method}] ${req.path}: status: ${status} > `, message);
        res.status(status).json({
            message
        });
    } catch (err) {
        next(err);
    }
};

//# sourceMappingURL=error.middleware.js.map