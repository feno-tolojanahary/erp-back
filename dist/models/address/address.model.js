"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _addressStateModel = _interopRequireDefault(require("./addressState.model"));
const _addressTypeModel = _interopRequireDefault(require("../static/addressType.model"));
const _sequelize1 = _interopRequireDefault(require("../sequelize"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let Address = class Address extends _sequelize.Model {
};
Address.init({
    id: {
        type: _sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    street2: {
        type: _sequelize.DataTypes.STRING
    },
    city: {
        type: _sequelize.DataTypes.STRING
    },
    zip: {
        type: _sequelize.DataTypes.STRING
    },
    typeId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _addressTypeModel.default,
            key: 'id'
        }
    },
    stateId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _addressStateModel.default,
            key: 'id'
        }
    },
    targetId: {
        type: _sequelize.DataTypes.INTEGER
    },
    targetType: {
        type: _sequelize.DataTypes.STRING
    },
    country: {
        type: _sequelize.DataTypes.STRING
    }
}, {
    sequelize: _sequelize1.default,
    tableName: 'address'
});
const _default = Address;

//# sourceMappingURL=address.model.js.map