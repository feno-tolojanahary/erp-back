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
const _addressModel = _interopRequireDefault(require("./address.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AddressEntity = _sequelize.default.define('address_entity', {
    addressId: {
        type: _sequelize1.DataTypes.INTEGER,
        references: {
            model: _addressModel.default,
            key: 'id'
        }
    },
    entityId: {
        type: _sequelize1.DataTypes.INTEGER
    },
    entityName: {
        type: _sequelize1.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});
const _default = AddressEntity;

//# sourceMappingURL=addressEntity.model.js.map