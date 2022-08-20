"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const addressState_model_1 = __importDefault(require("./addressState.model"));
const __1 = __importDefault(require(".."));
// Class entity
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    street2: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    },
    zip: {
        type: sequelize_1.DataTypes.STRING
    },
    stateId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: addressState_model_1.default,
            key: 'id'
        }
    },
    countryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'address_country',
                schema: 'public'
            },
            key: 'id'
        }
    }
}, {
    sequelize: __1.default,
    tableName: 'address'
});
exports.default = Address;
