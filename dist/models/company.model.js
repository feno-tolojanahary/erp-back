"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const address_model_1 = __importDefault(require("./address/address.model"));
const contact_model_1 = __importDefault(require("./contact.model"));
const _1 = __importDefault(require("."));
// Class entity
class Company extends sequelize_1.Model {
}
Company.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: address_model_1.default,
            key: 'id'
        }
    },
    taxID: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING,
    },
    website: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tag_id: {
        type: sequelize_1.DataTypes.INTEGER,
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
    sequelize: _1.default
});
Company.hasMany(contact_model_1.default);
contact_model_1.default.belongsTo(Company);
exports.default = Company;
