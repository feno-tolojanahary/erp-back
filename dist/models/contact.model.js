"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const address_model_1 = __importDefault(require("./address/address.model"));
class ContactModel extends sequelize_1.Model {
}
exports.ContactModel = ContactModel;
ContactModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
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
    companyId: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE
}, {
    tableName: 'contacts',
    sequelize: _1.default
});
address_model_1.default.belongsTo(ContactModel, { foreignKey: "addressId" });
ContactModel.Address = ContactModel.belongsTo(address_model_1.default, { foreignKey: "entityId" });
exports.default = ContactModel;
