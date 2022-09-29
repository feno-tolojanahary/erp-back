"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "successResponse", {
    enumerable: true,
    get: ()=>successResponse
});
const successResponse = (dataRes, req, res, next)=>{
    try {
        const { data , message  } = dataRes;
        const status = 200;
        res.status(status).json({
            data,
            message
        });
    } catch (err) {
        next(err);
    }
};

//# sourceMappingURL=success.middleware.js.map