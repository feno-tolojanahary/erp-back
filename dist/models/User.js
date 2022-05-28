"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    jobPosition: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.STRING,
    mobile: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    website: sequelize_1.DataTypes.STRING,
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, {
    tableName: 'users',
    sequelize: _1.default
});
exports.default = UserModel;
