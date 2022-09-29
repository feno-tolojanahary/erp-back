"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = _interopRequireDefault(require("../sequelize"));
const _sequelize1 = require("sequelize");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AddressType = _sequelize.default.define('address_types', {
    id: {
        type: _sequelize1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: _sequelize1.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});
const _default = AddressType;

//# sourceMappingURL=addressType.model.js.map