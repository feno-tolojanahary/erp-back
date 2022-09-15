"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../sequelize"));
const sequelize_2 = require("sequelize");
const AddressType = sequelize_1.default.define('address_types', {
    id: {
        type: sequelize_2.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_2.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = AddressType;
