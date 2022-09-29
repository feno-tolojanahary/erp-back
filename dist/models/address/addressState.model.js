"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _sequelize1 = _interopRequireDefault(require("../sequelize"));
const _user = _interopRequireDefault(require("../users/user"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AddressState = class AddressState extends _sequelize.Model {
};
AddressState.init({
    id: {
        type: _sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stateName: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    stateCode: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    companyId: {
        type: _sequelize.DataTypes.INTEGER,
        defaultValue: 1
    },
    createdBy: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _user.default,
            key: 'id'
        },
        defaultValue: 1
    }
}, {
    sequelize: _sequelize1.default,
    tableName: "address_states"
});
const _default = AddressState;

//# sourceMappingURL=addressState.model.js.map