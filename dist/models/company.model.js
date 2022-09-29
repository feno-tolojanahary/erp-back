"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _sequelize = require("sequelize");
const _addressModel = _interopRequireDefault(require("./address/address.model"));
const _sequelize1 = _interopRequireDefault(require("./sequelize"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let Company = class Company extends _sequelize.Model {
};
Company.init({
    id: {
        type: _sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    taxID: {
        type: _sequelize.DataTypes.STRING
    },
    phone: {
        type: _sequelize.DataTypes.STRING
    },
    mobile: {
        type: _sequelize.DataTypes.STRING
    },
    website: {
        type: _sequelize.DataTypes.STRING
    },
    email: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    addressId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: _addressModel.default,
            key: 'id'
        }
    },
    tagId: {
        type: _sequelize.DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'tags',
                schema: 'public'
            },
            key: 'id'
        }
    }
}, {
    tableName: 'companies',
    sequelize: _sequelize1.default
});
const _default = Company;

//# sourceMappingURL=company.model.js.map