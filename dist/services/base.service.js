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
        this.model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdData = this.model.create(data);
            return createdData;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allData = yield this.model.findAll();
            return allData;
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.update(data, { where: { id } });
            const updatedData = this.model.findByPk(id);
            return updatedData;
        });
    }
    delete(id) {
        const destroyedResult = this.model.destroy({ where: { id } });
        return destroyedResult;
    }
}
exports.default = BaseService;
