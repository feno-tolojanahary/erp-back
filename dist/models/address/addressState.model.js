"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../sequelize"));
const user_1 = __importDefault(require("../users/user"));
// Class entity
class AddressState extends sequelize_1.Model {
}
AddressState.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stateName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    stateCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    },
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_1.default,
            key: 'id'
        },
        defaultValue: 1
    }
}, {
    sequelize: sequelize_2.default,
    tableName: "address_states"
});
exports.default = AddressState;
