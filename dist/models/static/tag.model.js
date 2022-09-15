"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../sequelize"));
const sequelize_2 = require("sequelize");
const Tag = sequelize_1.default.define('tags', {
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
exports.default = Tag;
