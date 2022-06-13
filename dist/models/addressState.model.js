"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const user_model_1 = __importDefault(require("./user.model"));
// Class entity
class AddressState extends sequelize_1.Model {
}
AddressState.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
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
    created_by: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_model_1.default,
            key: 'id'
        }
    }
}, {
    sequelize: _1.default,
    tableName: "address_states"
});
exports.default = AddressState;
