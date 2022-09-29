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
    Company: ()=>_companyModel.default,
    Contact: ()=>_contactModel.default,
    Address: ()=>_addressModel.default,
    AddressEntity: ()=>_addressEntityModel.default,
    AddressState: ()=>_addressStateModel.default,
    User: ()=>_user.default,
    UserTitle: ()=>_userTitle.default
});
const _companyModel = _interopRequireDefault(require("./company.model"));
const _contactModel = _interopRequireDefault(require("./contact.model"));
const _addressModel = _interopRequireDefault(require("./address/address.model"));
const _addressEntityModel = _interopRequireDefault(require("./address/addressEntity.model"));
const _addressStateModel = _interopRequireDefault(require("./address/addressState.model"));
const _user = _interopRequireDefault(require("./users/user"));
const _userTitle = _interopRequireDefault(require("./users/userTitle"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_companyModel.default.hasMany(_contactModel.default, {
    foreignKey: 'companyId'
});
_contactModel.default.Company = _contactModel.default.belongsTo(_companyModel.default, {
    foreignKey: 'companyId'
});
_contactModel.default.Address = _contactModel.default.hasOne(_addressModel.default, {
    as: "address",
    foreignKey: "targetId"
});
_addressModel.default.belongsTo(_contactModel.default, {
    foreignKey: "targetId"
});
_companyModel.default.Address = _companyModel.default.hasOne(_addressModel.default, {
    as: "address",
    foreignKey: "targetId"
});
_addressModel.default.belongsTo(_companyModel.default, {
    as: "address",
    foreignKey: "targetId"
});

//# sourceMappingURL=index.js.map