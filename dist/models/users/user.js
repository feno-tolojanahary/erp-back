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
    UserModel: ()=>UserModel,
    default: ()=>_default
});
const _sequelize = require("sequelize");
const _sequelize1 = _interopRequireDefault(require("../sequelize"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let UserModel = class UserModel extends _sequelize.Model {
};
UserModel.init({
    id: {
        type: _sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: _sequelize.DataTypes.STRING
}, {
    tableName: 'users',
    sequelize: _sequelize1.default
});
const _default = UserModel;

//# sourceMappingURL=user.js.map