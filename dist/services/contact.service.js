"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _sequelize = require("sequelize");
const _baseService = _interopRequireDefault(require("./base.service"));
const _index = require("../models/index");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ContactService = class ContactService extends _baseService.default {
    async create(data) {
        const findContact = await this.Model.findOne({
            where: {
                [_sequelize.Op.or]: [
                    {
                        email: data.email
                    },
                    {
                        name: data.name
                    }
                ]
            }
        });
        if (findContact) {
            throw new _httpException.HttpException(400, "Contact already exists");
        }
        const createdContact = await this.Model.create(data, {
            include: [
                _index.Contact.Company,
                _index.Contact.Address
            ]
        });
        return createdContact;
    }
    async findAll() {
        return this.Model.findAll({
            where: {
                createdBy: 1
            },
            include: [
                _index.Contact.Company,
                _index.Contact.Address
            ]
        });
    }
    async findById(id) {
        return this.Model.findOne({
            where: {
                id
            },
            include: [
                _index.Contact.Company,
                _index.Contact.Address
            ]
        });
    }
    async update(data, id) {
        return new Promise((resolve, reject)=>{
            (async ()=>{
                var ref;
                const contactPromiseUpdate = await this.Model.update(data, {
                    where: {
                        id
                    }
                });
                let addressPromiseUpdate = null;
                if (data === null || data === void 0 ? void 0 : (ref = data.address) === null || ref === void 0 ? void 0 : ref.id) {
                    const { id: id1  } = data.address;
                    addressPromiseUpdate = await _index.Address.update(data.address, {
                        where: {
                            id: id1
                        }
                    });
                } else if (data === null || data === void 0 ? void 0 : data.address) {
                    data.address["targetId"] = id;
                    addressPromiseUpdate = await _index.Address.create(data.address);
                }
                try {
                    const results = await Promise.all([
                        contactPromiseUpdate,
                        addressPromiseUpdate
                    ]);
                    resolve(results[0]);
                } catch (err) {
                    reject(err);
                }
            })();
        });
    }
    constructor(){
        super(_index.Contact);
    }
};
const _default = ContactService;

//# sourceMappingURL=contact.service.js.map