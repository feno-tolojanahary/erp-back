"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = void 0;
const successResponse = (dataRes, req, res, next) => {
    try {
        const { data, message } = dataRes;
        const status = 200;
        res.status(status).json({ data, message });
    }
    catch (err) {
        next(err);
    }
};
exports.successResponse = successResponse;
