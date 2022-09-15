"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../sequelize"));
const sequelize_2 = require("sequelize");
const address_model_1 = __importDefault(require("../address/address.model"));
const AddressEntity = sequelize_1.default.define('address_entity', {
    addressId: {
        type: sequelize_2.DataTypes.INTEGER,
        references: {
            model: address_model_1.default,
            key: 'id'
        }
    },
    entityId: {
        type: sequelize_2.DataTypes.INTEGER
    },
    entityName: {
        type: sequelize_2.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = AddressEntity;
