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
class BaseService {
    constructor(model) {
        this.Model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdData = this.Model.create(data);
            return createdData;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield this.Model.findAll();
            return allData;
        });
    }
    findByCompany(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield this.Model.findAll({ where: { companyId } });
            return allData;
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Model.update(data, { where: { id } });
            const updatedData = this.Model.findByPk(id);
            return updatedData;
        });
    }
    delete(id) {
        const destroyedResult = this.Model.destroy({ where: { id } });
        return destroyedResult;
    }
}
exports.default = BaseService;
