"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const sequelize_1 = require("sequelize");
const Country = index_1.default.define('address_country', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    code: {
        type: sequelize_1.DataTypes.STRING(2)
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Country;
