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
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor(Service) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.service.findAll();
                next({ data: allUsers, message: `Get all list` });
            }
            catch (err) {
                next(err);
            }
        });
        this.getByCompany = (req, es, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.service.findByCompany(req.params.companyId);
                next({ data: allUsers, message: `Get all list` });
            }
            catch (err) {
                next(err);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("calling create base: ", req.body);
                const data = req.body;
                const createdData = yield this.service.create(data);
                next({ data: createdData, message: "Data created" });
            }
            catch (err) {
                next(err);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const data = req.body;
                const result = yield this.service.update(data, id);
                next({ data: result, message: "Updated data" });
            }
            catch (err) {
                next(err);
            }
        });
        this.destroy = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const result = yield this.service.delete(id);
                next({ data: result, message: "Deleted data" });
            }
            catch (err) {
                next(err);
            }
        });
        this.service = new Service();
    }
}
exports.default = BaseController;
